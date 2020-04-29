import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import logo from './logo.svg';
import './App.css';
import CovidGoogleMap from "./components/CovidGoogleMap/CovidGoogleMap";
import PatientInfo from "./components/PatientInfo/PatientInfo";
import CovidDashboard from "./components/CovidDashboard/CovidDashboard";


function App() {
    return (
        <CovidDashboard/>

    );
}

export default App;
