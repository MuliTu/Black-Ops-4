import React from 'react'
import './Graph.css'
import '../../App.css'
import {Graph} from "../Graph/Graph";
import {getUserData, myFetch} from "../../Functions/Http";
import {Loading} from "../../components/Loading/Loading";
import * as firebase from "firebase";

export class WeeklyGraphs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        this.refreshPage();
    }

    componentDidMount() {
        this.refreshPage();
    }

    refreshPage = () => {
        const {name} = this.props.match.params;
        getUserData(name, 'matches').then(res => {
            console.log(res);
            const {matches} = res.data;
            const fromAPI = matches.map(x => Object.create({
                assists: x.playerStats.assists,
                date: x.utcStartSeconds,
                ekia: x.playerStats.ekia,
                ekiadRatio: x.playerStats.ekiadRatio,
                kills: x.playerStats.kills
            }));
            firebase.database().ref(`/users/${name}/weekly`).on('value', (snap) => {
                const dataFromDB = snap.val();
                console.log('this is the result from db',dataFromDB);
                if (dataFromDB == null) {
                    firebase.database().ref(`/users/${name}`).update({
                        weekly: fromAPI
                    });
                }
                const size = this.arraysEqual(dataFromDB, fromAPI);
                this.setState({
                    data: size
                })
            })
        });
    };
    arraysEqual = (arraToSave, arrayWithChanges) => {
        return Object.values(arrayWithChanges.concat(arraToSave).reduce((r, o) => {
            r[o.date] = o;
            return r;
        }, {}));

    };

    render() {
        const chartList = Object.assign({
            kills: this.state.data.map(x => x.kills),
            ekia: this.state.data.map(x => x.ekia),
            assists: this.state.data.map(x => x.assists),
            ekiadRatio: this.state.data.map(x => x.ekiadRatio)
        },{});
        console.log('this is chartList ',chartList);
        const names = Object.keys(chartList);
        const times = this.state.data.map(x => x.date);

        return (
            <div className={'container'}>
                <button onClick={() => {
                    this.setState({bo: !this.state.bo}, () => this.refreshPage())
                }}>BlackOPS
                </button>
                <div className={'graph-container'}>
                    {
                        chartList.kills.length > 0 ?
                            Object.keys(chartList).map((x, index) => {
                                return (
                                    <div key={index} className={'graph-wrapper'}>
                                        <Graph name={names[index]} dates={times.reverse()} data={chartList[x]}
                                               type={'line'}/>
                                    </div>
                                )
                            })
                            :
                            <Loading/>
                    }
                </div>
            </div>


        );
    }
}

export default WeeklyGraphs