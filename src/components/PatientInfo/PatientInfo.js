import React, {useEffect, useState} from 'react';

const PatientInfo = ({name, address, note, verifyDate}) => {
    return <div className = "patient-info">
            <li>Name: {name}</li>
            <li>Address: {address}</li>
            <li>Note: {note}</li>
            <li>Verify Date: {verifyDate}</li>
    </div>
};

export default PatientInfo;