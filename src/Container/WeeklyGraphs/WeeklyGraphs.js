import React from 'react'
import './Graph.css'
import '../../App.css'
import {Graph} from "../Graph/Graph";
import {getUserData, myFetch} from "../../Functions/Http";
import {Loading} from "../../components/Loading/Loading";
import * as firebase from "firebase";
import {getDataFromFB} from "../../Functions/Functions";

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



    refreshPage = () => {
        const {name} = this.props.match.params;
        getUserData(name, 'matches').then(res => {
            console.log(res);
            const {matches} = res.data;
            const fromAPI = matches.map(x => Object.assign({
                assists: x.playerStats.assists,
                date: x.utcStartSeconds,
                ekia: x.playerStats.ekia,
                ekiadRatio: x.playerStats.ekiadRatio,
                kills: x.playerStats.kills
            }));
            firebase.database().ref(`/users/${name}/weekly`).on('value', (snap) => {
                const dataFromDB = snap.val();
                 if (dataFromDB === null) {
                    console.log('no data in db');
                    firebase.database().ref(`/users/${name}`).update({
                        weekly: fromAPI
                    }).then(console.log('update complete for',name));
                }
                const size = this.arraysEqual(dataFromDB, fromAPI);
                console.log(size);
                firebase.database().ref(`/users/${name}`).update({
                    weekly: size
                },()=>this.setState({
                    data: size
                }));

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