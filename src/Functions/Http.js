const URL ='https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/';


export const toJson = (data) => {
    return data.json()
};

export const myFetch = (url) => {
    return fetch(url).then(toJson)
};

export const getUserData = (username,action='profile',bo=false) => {

    const path = (!action.match('matches')  ? `${URL}${username}/${action}` : `${URL}${username}/${action}/${bo?'wz':'mp'}/start/0/end/0/details` );
    console.log(path);
    console.log(`${URL}${username}/${action}/wz/start/0/end/0/details`);
    return Promise.resolve(myFetch(path))
};


export const getUsersData = (usersList) =>{
    console.log('active');
return Promise.all(usersList.map(user =>{return myFetch(`${URL}${user}/profile`)}))
};
