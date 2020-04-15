import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Title from '../Title/Title';

const Prescription = () => {
    const {_id} = useParams();
    const {havePress} = useLocation();
    const [patient, setPatient] = useState([]);
    const [getPrescription, setGetPrescription] = useState(null);
    useEffect(()=>{
        if(havePress)
            return;
        fetch('https://immense-inlet-46501.herokuapp.com/prescription/'+_id)
        .then(response => response.json())
        .then(json => setPatient(json))
    },[_id, havePress])

    useEffect(()=>{
        if(!havePress)
            return;
        fetch('https://immense-inlet-46501.herokuapp.com/getPrescription/'+_id)
        .then(response => response.json())
        .then(json => setGetPrescription(json))
    },[_id, havePress])

    return (
        <div>
        {
            havePress?
            <div>
                {getPrescription && <div>
                    <h2 className="text-center">Patient Name: {getPrescription[0].name}</h2>
                    <h4 className="text-center">Prescription: {getPrescription[0].prescription}</h4>
                </div>}
            </div>:
            patient.map(pt=><Title patient={pt} _id={_id} />)
        }
        
        </div>
    );
};

export default Prescription;