import React, {useEffect, useState, Component} from 'react';
import PatientInfo from "../PatientInfo/PatientInfo"
import { componentFromProp } from 'recompose';
import "./PatientList.css"

class PatientList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount(){
        fetch("https://maps.vnpost.vn/apps/covid19/api/patientapi/list")
            .then(res => res.json())
            .then(json => this.setState({items: json.data}))
    }

    listClickHandle() {
        
    }

    render() {
        return (
            <div className="list">
            {this.state.items.map(item => {
                return (
                    <li onClick={this.listClickHandle}>
                        Name: {item.name}
                    </li>
                )
            })}
            </div>
        );
    }
}

export default PatientList;