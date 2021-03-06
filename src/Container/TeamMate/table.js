import React from 'react'
import './TeamMate.css'
import {fixName} from "../../Functions/Functions";

export const TableRow = (actoin ,data1,data2,friendName)=>{
    return (<div className={'table-row'}>
        <div className={'table-action'}>{fixName(actoin)}</div>
        <div className={'table-result'}>{Math.floor(data1)}</div>
        <div className={'table-result'}>{Math.floor(data2)}</div>
        <div className={'table-result'} style={{color:isBigger(data1,data2)}}>
            {`${Math.floor(Math.abs(data2 - data1))}
        ${data2 - data1 > 0 ? 'Less' : 'More' } then ${friendName}`}</div>
    </div>)
};

const isBigger =(num1,num2)=>{
    if(num1 > num2)
        return 'green';
    else if(num2>num1)
        return 'red';
    return 'white'

}