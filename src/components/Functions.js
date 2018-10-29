import React from 'react'
export const getPresentage = (num, total, bool = true) => {
    return (bool ? Math.floor((num / total) * 100) : ((num / total)).toString().slice(0, 6));
};

export const getShortNum = (num,slice=4) =>{
    return num.toString().slice(0,slice)
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
        const style = {
            height:'100px',
            width:'100px'
        };
        return (num !== 0 ? <img style={style} src={list[num]} alt={'pre'}/> :''  )
    }
;


