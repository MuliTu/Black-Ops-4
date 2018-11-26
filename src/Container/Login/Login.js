import React from 'react'
import {getUserData, myFetch} from "../../Functions/Http";
import './Login.css'
import {Link} from "react-router-dom";
import {getUsers} from "../../Functions/Functions";
import * as firebase from "firebase";
import {Loading} from "../../components/Loading/Loading";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            query: '',
            data: [],
            res: '',
            options: []
        }
    }

    componentWillMount() {
        firebase.database().ref('/users/').on('value', (snap) => {
            const users = Object.keys(snap.val()).map(x => Object.assign({name: x}));
                this.setState({
                    options: users.map(x => x.name)
                })
        })


        }

        validateUsername = (username) => {
            getUserData(username).then(results => {
                this.setState({
                    validate: results.status === 'success',
                    data: results.data,
                    res: results.status
                })
            });
        };

        render()
        {
            const {options} = this.state;
            return (
                <div className={'login'}>
                    <div>
                        {
                            options.length > 0 ?
                                options.map((user, index) => {
                                    return (
                                        <div key={index} onClick={() => {
                                            this.setState({
                                                query: user
                                            }, () => this.validateUsername(this.state.query))
                                        }}>{user}

                                        </div>
                                    )
                                })
                                :
                                <Loading/>

                        }


                    </div>
                    <div hidden={!this.state.validate}><Link
                        to={{pathname: `/${this.state.query}/lifetime`, state: {data: this.state.data}}}>
                        Click Her
                    </Link></div>
                </div>
            );
        }


    }

    export
    default
    Login