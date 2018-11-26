import React from 'react'
import {Bar, Doughnut} from "react-chartjs-2";
import {Loading} from "../../components/Loading/Loading";
import {normalizeDate} from "../../Functions/Functions";
import './test.css'

export class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: [],
            dates: [],
            type: '',
            width: window.innerWidth

        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.refreshData();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    refreshData = () => {
        this.setState({
            name: this.props.name,
            data: this.props.data,
            dates: this.props.dates,
            type: this.props.type,

        });
    };


    getBar = (name, data, dates) => {
        const option = {
            animation: {
                duration:5000
            },
            responsive:false,
            maintainAspectRatio: false
        };
        const myData = this.createDataForGraph(name, data, dates);
        return (
                <Bar
                    width={1400}
                    height={400}
                    data={myData}
                    redraw={true}
                    options={option}
                />)
    };

    getPie = (name, data, data2) => {
        const options = {maintainAspectRatio: false};
        const myData = this.createDataForPie(name, data, data2);
        return (<Doughnut
            height={250}
            width={200}
            data={myData}
            redraw={true}
            options={options}/>)
    };

    createDataForPie = (name, data1, data2) => {
        return {
            labels: [
                data1.action, data2.action],
            datasets: [{
                data: [data1.result, data2.result],
                backgroundColor: [
                    '#b17a1a',
                    '#6d4c0c',
                ],
                hoverBackgroundColor: [
                    '#7e5812',
                    '#4a310d',
                ]
            }]
        };
    };


    render() {
        const {data, name, dates} = this.state;
        return (
            <div >{
                this.state.type
                    ?
                    this.state.type.match('line')
                        ?
                        this.getBar(name, data, dates, this.state.width)
                        :
                        this.getPie(name, data, dates)
                    :
                    <Loading/>
            }
            </div>
        );


    }


    componentWillMount() {

        this.updateDimensions();
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth});
        this.forceUpdate();
    };

    createDataForGraph = (name, data, dates) => {
        const temp = normalizeDate(dates);
        const avgValue = [];
        const avg = this.state.data ? this.state.data.reduce((a, b) => a + b) : 0;
        for (let i = 0; i < temp.length; i++) {
            avgValue.push(avg / temp.length);
        }
        return {
            labels: temp.reverse(),
            datasets: [
                {
                    type: 'line',
                    fill: false,
                    label: `Average`,
                    backgroundColor: 'rgba(255, 255, 255,0.5)',
                    borderColor: 'rgba(255, 255, 255,0.5)',
                    data: avgValue,
                    steppedLine: false,
                    lineTension: 0.6,
                    pointRadius: 0,
                    pointHitRadius: 10,
                    borderDash: [3],
                },
                {
                    type: 'bar',
                    fill: false,
                    borderDash: [],
                    label: name.toUpperCase(),
                    backgroundColor: 'rgba(255,140,0)',// orange
                    borderColor: 'rgb(255,140,0)',
                    data: data,
                    lineTension: 0.1,
                    pointRadius: 1,
                    pointHitRadius: 10,

                },

            ],
        };
    };
}
