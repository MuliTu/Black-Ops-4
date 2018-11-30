import React from 'react'
import {cardFactory, pieFactory} from "../../Functions/Functions";
import {Loading} from "../../components/Loading/Loading";
import './LifeTime.css'
import '../../App.css'
import {cardsData, pieData} from "./Data";
import {getUserData,} from "../../Functions/Http";
import * as firebase from "firebase";

class LifeTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: null,
        }
    };

    componentWillMount() {
        const {name} = this.props.match.params;
        getUserData(name).then(res => {
            const userData = res.data.mp.lifetime.all;
            firebase.database().ref(`/users/${name}`).update({
                data: Object.keys(userData).map(x => Object.assign({action: x, result: userData[x]}))
            },
                () => firebase.database().ref(`/users/${name}`).on('value', (snap) => {
                    console.log(snap.val());
                this.setState({allData:snap.val().data})
            }));
        });
    }

    render() {
        const list = (this.state.allData !== null ? this.state.allData : []);
        const cardFactoryList = cardsData();
        const pieFactorList = pieData();
        return (
            <div className={'container'}>
                {
                    list.length > 0 ?
                        <div className={'cards-wrapper'}>
                            {
                                pieFactorList.map((x, index) => {
                                    return (<div key={index}>{pieFactory(x.obj1, x.obj2,list)}</div>)
                                })
                            }
                            {
                                cardFactoryList.map((x, index) => {
                                    return (<div key={index}>{cardFactory(x,list)}</div>)
                                })
                            }
                        </div>
                        :
                        <Loading/>
                }
            </div>
        );
    }


}

export default LifeTime