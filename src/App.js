import React from 'react'
import Statistics from "./Container/Statistics/Statistics";
import './App.css'
import {Logo} from "./Functions/Functions";
import {Loading} from "./components/Loading/Loading";
import {getUserData} from "./Functions/Http";
import Login from "./Container/Login/Login";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            list: [],
            com: false,
            isAutorise: null
        }
    }


    componentDidMount() {
        this.setState({
            list: list()
        })
    }

    componentDidUpdate(){

    }

    changeList = (user) => {
        user.show = !user.show;
        this.setState({
            user
        })
    };

    setAutorazion=(acces,username)=>{
        console.log('from app',acces,username);
        if(acces)
        this.setState({
            isAutorise: true,
        username:username
        })
};

    getAllUsers = () => {
        return this.state.list.map(x => ({data: x.data, color: x.color}));
    };

    render() {
        const users = this.getAllUsers();
        const {isAutorise} = this.state;

        return (
            <div>
                <Logo/>
                {
                    isAutorise ?
                        <div className={'App'}>
                            {this.state.list.map((user, index) => {
                                return users.length > 0 ?
                                    <div key={index} className={'statistic-container'}>
                                        <Statistics name={this.state.username} color={`rgb(${user.color})`}/>
                                    </div>
                                    :
                                    <div key={index}>
                                        <Loading/>
                                    </div>
                            })}
                        </div>
                        :
                        <Login isAutorized={(bool,user)=>(this.setAutorazion(bool,user))}/>
                }
            </div>
        );
    }
}



export default App

export const list = () => {
    return [
        // {name: 'dudioudo', color: '255, 0, 0', data: [], friends: []},
        // {show: true, name: 'WakingBrizard', color: '0, 0, 255', data: []},
        {show: true, name: 'FormingSpoon801', color: '0, 255, 0', data: []},
        // {show: true, name: 'MenahemCohen', color: '0, 0, 0', data: []},
        // {show: true, name: 'SufleShokolad', color: '255,255,0', data: []},
    ]
};