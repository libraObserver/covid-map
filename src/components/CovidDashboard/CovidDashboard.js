import React, {useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CovidGoogleMap from "../CovidGoogleMap/CovidGoogleMap";
import PatientInfo from "../PatientInfo/PatientInfo";
import Container from "react-bootstrap/Container";
import CovidMap from "../CovidMap/CovidMap";
import PatientList from "../PatientList/PatientList";
import Slider from '@material-ui/core/Slider';


const CovidDashboard = (props) => {
    const [currentPatient, setCurrentPatient] = useState();
    const patientMarkerClickedHandler = (patient) => {
        setCurrentPatient(patient);
    }
    console.log('Covid Dashboard render');
    return <div className="all">
        <div className="map-lmt">
            <CovidMap onPatientMarkerClicked={patientMarkerClickedHandler}/>
            <Slider/>
        </div>                                                  
        <div className="patint-info">
            {currentPatient &&
            <PatientInfo name={currentPatient.name} address={currentPatient.address} note={currentPatient.note}
                        verifyDate={currentPatient.verifyDate}/>}
        </div>
        <PatientList/>
            
    </div>
};

export default CovidDashboard;