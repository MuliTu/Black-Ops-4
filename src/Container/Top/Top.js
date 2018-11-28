import React from "react";
import {getPrestigeImage} from "../../Functions/Functions";
import './Top.css'
import Navigation from "../Navigation/Navigation";
import {getUserData, myFetch} from "../../Functions/Http";
import * as firebase from "firebase";

class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            level: 0,
            prestige: 0

        }

    }

    prestigeImage = () => {
        return {
            width:'300px',
            backgroundImage: `url(${getPrestigeImage(this.state.prestige)})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }

    };

    componentWillMount() {

        const {name} = this.props.match.params;
        getUserData(name).then(res=>{
            const userName = res.data.username;
            const userLevel = res.data.mp.level;
            const userPrestige = res.data.mp.prestige;
            firebase.database().ref(`/users/${name}`).update({
                personal: {
                    name: userName,
                    level: userLevel,
                    prestige: userPrestige
                },
            });
        });
        firebase.database().ref(`/users/${name}`).on('value', (snap) => {
            const t = snap.val();
            this.setState({
                username:t.personal.name,
                level:t.personal.level,
                prestige:t.personal.prestige
            })
        });
    }

    render() {
        return (
            <div className={'top'} >
                <div className={'info-section'}>
                    <div className={'left'}>
                        <div>
                            <img src={getPrestigeImage(this.state.prestige)} style={{width:'120px'}}/>
                        </div>
                        <div>
                            {this.state.username}
                        </div>
                    </div>
                    <div className={'right'}>

                        <div className={'right-sub'}>Level: {this.state.level}</div>
                        <div className={'right-sub'}>Prestige: {this.state.prestige}</div>
                    </div>
                </div>
                <Navigation {...this.props}/>
            </div>
        );
    }
};
export default Top