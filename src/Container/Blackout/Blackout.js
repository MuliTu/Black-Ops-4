import React from 'react'
import '../../App.css'
import './Blackout.css'
import {getUserData} from "../../Functions/Http";
import {cardFactory, pieFactory} from "../../Functions/Functions";
import {cardsData, pieData} from "./Data";
import {Loading} from "../../components/Loading/Loading";
import {getBar} from "../Graph/GraphFunctions";


class Blackout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 0,
            data: [],
            tempData: [],
        }
    }

    componentWillMount() {
        const {name} = this.props.match.params;
        getUserData(name, 'profile', true).then(({data}) => {
            const userData = data.mp.lifetime.all;
            const {level} = data.mp;
            this.setState({
                level,
                data: Object.keys(userData).map(x => Object.assign({action: x, result: userData[x]}))
            }, () => {
                getUserData(name, 'matches', true).then(res => {
                    console.log('respunse', res);
                    const {matches} = res.data;
                    const fromAPI = matches.map(x => Object.assign({
                        assists: x.playerStats.assists,
                        date: x.utcStartSeconds,
                        ekia: x.playerStats.ekia,
                        ekiadRatio: x.playerStats.ekiadRatio,
                        kills: x.playerStats.kills
                    }));
                    this.setState({
                        tempData: fromAPI
                    }, () => console.log(this.state))
                })
            })
        })
    }


    render() {
        const chartList = Object.assign({
            kills: this.state.tempData.map(x => x.kills),
        }, {});
        const names = Object.keys(chartList);
        const times = this.state.tempData.map(x => x.date);


        const cardList = cardsData();
        const pieList = pieData();
        const level = this.state.level ? this.state.level : 0;
        const list = this.state.data !== null ? this.state.data : [];
        return (
            <div className={'container'}>
                {
                    list.length > 0 && names.length !== 0 ?
                        <div className={'blackout'}>
                            <div className={'profile'}>
                                <div className={'rank'}>
                                    <img className={'level'}
                                         src={`https://www.callofduty.com/cdn/app/icons/bo4/ranks/wz/ui_icon_rank_wz_level${this.state.level.toString().slice().length === 1 ? `0${this.state.level}` : this.state.level}_large.png`}/>
                                </div>
                                <div className={'rank'}>
                                    <div>
                                        {level}
                                    </div>
                                    <div className={'level-label'}>Level</div>
                                </div>

                            </div>
                            <div className={'graph-wrapper'}>


                                {
                                    times.length > 0 ?
                                        names.map((x, index) => {
                                            return (<div key={index}>
                                                {getBar(x, chartList[x], times.reverse(), 1000,400,'line')}
                                            </div>)
                                        })
                                        :
                                        <Loading/>
                                }

                            </div>
                                {
                                    pieList.map((x, index) => {
                                        return (pieFactory(x.obj1, x.obj2, list))
                                    })
                                }
                                {
                                    cardList.map((x, index) => {
                                        return (cardFactory(x, list))
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

export default Blackout