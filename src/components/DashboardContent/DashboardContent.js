import React, { useEffect, useState } from 'react';
import CountTablet from '../CountTablet/CountTablet';
import PatientList from '../PatientList/PatientList';

const DashboardContent = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4200/appointment')
            .then(response => response.json())
            .then(json => {
                setUsers(json)         
        })
    },[])
    console.log(users);

    const tablet = [{name:"Pending Appointments", color: "bg-secondary"},
    {name:"Today's Appointment", color: "bg-success"},
    {name:"Total Appointment", color: "bg-info"},
    {name:"Total Patients", color: "bg-danger"}];

    let patients = [];
    for(let i = 0; i < tablet.length; i++){
        patients[i] = [...users];
        patients[i].tablet = tablet[i];
    }

    return (
        <div>
            <h5>Dashboard</h5>
            <div className="row">
                {
                    patients.map(pt=><CountTablet patient={pt}/>)
                }
            </div>
            <h5 className="mt-5">Recent Appointment</h5>
            
            <div className="d-flex justify-content-between">
                <p className="text-muted">Sr. No</p>
                <p className="text-muted">Date</p>
                <p className="text-muted">Time</p>
                <p className="text-muted">Name</p>
                <p className="text-muted">Contact</p>
                <p className="text-muted">Prescription</p>
                <p className="text-muted">Action</p>
            </div>
            <PatientList 
            patients={users}
            allPatient={true}
            />
        </div>
    );
};

export default DashboardContent;