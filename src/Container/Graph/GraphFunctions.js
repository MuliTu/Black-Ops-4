import {normalizeDate} from "../../Functions/Functions";
import {Bar, Doughnut} from "react-chartjs-2";
import React from "react";

const createDataForGraph = (name, data, dates,type) => {
    console.log('this is data from grpah',name, data, dates);
    const temp = normalizeDate(dates);
    const avgValue = [];
    const avg = data ? data.reduce((a, b) => a + b) : 0;
    for (let i = 0; i < temp.length; i++) {
        avgValue.push(avg / temp.length);
    }
    return {
        labels: temp,
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
                borderDash: [6],
            },
            {
                type: type,
                fill: false,
                borderDash: [],
                label: name.toUpperCase(),
                backgroundColor: 'rgba(255,140,0)',// orange
                borderColor: 'rgb(255,140,0)',
                data: data,
                lineTension: 0.1,
                pointRadius: (type === 'line'? 3 : 1),
                pointHitRadius: 10,

            },

        ],
    };
};

const createDataForPie = (name, data1, data2) => {
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

export const getBar = (name, data, dates,width = 1400,height =400,type='bar') => {
    const option = {
        animation: {
            duration: 5000
        },
        responsive: false,
        maintainAspectRatio: false
    };
    const myData = createDataForGraph(name, data, dates,type);
    return (
        <Bar
            width={width}
            height={height}
            data={myData}
            redraw={true}
            options={option}
        />)
};

export const getPie = (name, data, data2) => {
    const options = {maintainAspectRatio: false};
    const myData = createDataForPie(name, data, data2);
    return (<Doughnut
        height={250}
        width={250}
        data={myData}
        redraw={true}
        options={options}/>)
};
