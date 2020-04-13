import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../Title/Title';

const Prescription = () => {
    const {_id} = useParams();
    const [patient, setPatient] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4200/prescription/'+_id)
        .then(response => response.json())
        .then(json => setPatient(json))
    },[_id])

    return (
        <div>
        {
            patient.map(pt=><Title patient={pt} _id={_id} />)
        }
        
        </div>
    );
};

export default Prescription;