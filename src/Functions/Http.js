const URL = 'https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/';


export const toJson = (data) => {
    return data.json()
};

export const myFetch = (url) => {
    return fetch(url).then(toJson)
};

export const getUserData = (username, action = 'profile', bo = false) => {
    console.log(action);
    switch (action) {
        case 'matches':
            return getUserMatches(username,bo);
        default:
            return getUserProfile(username,bo);

    }
};


export const getUsersData = (usersList) => {
    return Promise.all(usersList.map(user => {
        return myFetch(`${URL}${user}/profile`)
    }))
};


export const getUserProfile = (username, blackout) => {
    const mainPath  = `${URL}${username}/profile`;
    const path = (blackout ? `${mainPath}/type/wz`  : mainPath );
    return Promise.resolve(myFetch(path))
};

export const getUserMatches = (username, blackout) => {
    const mainPath  = `${URL}${username}/matches/mp/start/0/end/0/details`;
    const path = (blackout ? `${mainPath.replace('mp','warzone')}`: mainPath );
    return Promise.resolve(myFetch(path))
};