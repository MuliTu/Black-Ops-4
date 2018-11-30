import * as firebase from "firebase";
import {Card} from "../components/Card/Card";
import {Graph} from "../Container/Graph/Graph";
import React from "react";

export const normalizeNumber = (num) => {

    return (num.toString().includes('.')?`${num.toString().split('.')[0]}.${num.toString().split('.')[1].slice(0,3)}`:num)
};

export const getPrestigeImage = (num) => {
    const list = [
        '',
        'https://image.ibb.co/ideMDA/L1.png',
        'https://image.ibb.co/jFtgDA/L2.png',
        'https://image.ibb.co/idRe0q/L3.png',
        'https://image.ibb.co/jsoRfq/L4.png',
        'https://image.ibb.co/cwviRV/L5.png',
        'https://image.ibb.co/iRMe0q/L6.png',
        'https://image.ibb.co/i9bq6V/L7.png',
        'https://image.ibb.co/cPXK0q/L8.png',
        'https://image.ibb.co/mZvHmV/L9.png',
        'https://image.ibb.co/dzGe0q/L10.png'
    ];

    return list[num]
};

export const fixName = (name) => {
return name.split('')[0].toUpperCase() +
    name.split('').slice(1)
        .map(letter => (letter === letter.toUpperCase()
            ? ` ${letter}`
            : letter)).join('')
};


export const normalizeDate = (timeList) => {
    return timeList.map(x => (`${new Date(x * 1000).toLocaleDateString('en-US')} ${new Date(x * 1000).getHours()}:${new Date(x * 1000).getMinutes()}`))
};

export const getSnapKey = (ref,data) =>{
    const  userRef=firebase.database().ref(`/users`);
    userRef.child(`/${ref}`).on('value',(snap)=>{
        console.log('this is snap',snap.val());
        if(snap.val() === null){
            console.log('create data');
            firebase.database().ref(`/users/${ref}`).push({
                data:data
            });
            return snap.val();
        }

        return Object.keys(snap.val())[0];

    });
};



export const pieFactory = (divider, divided , data) => {
    const allData = data;

    const obj1 = hardFilter(allData, divider);
    const obj2 = hardFilter(allData, divided);
    return (<div className={'middel'}>
        <div className={'card-wrapper'}>
            <Card name={`${obj1.action.toUpperCase()}/${obj2.action.toUpperCase()}`}
                  text={`Ratio ${normalizeNumber((obj1.result / obj2.result) * 100)}%`}>
                <Graph name={'test'} data={obj1} dates={obj2} type={'pie'} size={500}/>
            </Card>
        </div>
    </div>)
};

export const cardFactory = (cardName,data) => {
    const allData =data;
    const filterResult = hardFilter(allData, cardName);
    return (<Card
        name={filterResult.action}>{((filterResult.result % 1) !== 0 ? normalizeNumber(filterResult.result) : filterResult.result)}</Card>)
};

const hardFilter = (list, word) => {
    return list.filter(x => x.action.split(' ').join('') === word)[0]
};


export const getUsers = () =>{
     firebase.database().ref('/users/').on('value', (snap) => {
         // console.log(Object.keys(snap.val()).map(x => Object.assign({name: x})))
      return Object.keys(snap.val()).map(x => Object.assign({name: x}));
    });
};