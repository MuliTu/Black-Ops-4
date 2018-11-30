import React from 'react'
import {Bar, Doughnut} from "react-chartjs-2";
import {Loading} from "../../components/Loading/Loading";
import {normalizeDate} from "../../Functions/Functions";
import './test.css'
import {getBar, getPie} from "./GraphFunctions";

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
        this.refreshData();
    }


    refreshData = () => {
        this.setState({
            name: this.props.name,
            data: this.props.data,
            dates: this.props.dates,
            type: this.props.type,

        });
    };

    render() {

        const {data, name, dates} = this.state;
        return (
            <div>{
                this.state.type
                    ?
                    this.state.type.match('line')
                        ?
                        getBar(name, data, dates)
                        :
                        getPie(name, data, dates)
                    :
                    <Loading/>
            }
            </div>
        );


    }

}
