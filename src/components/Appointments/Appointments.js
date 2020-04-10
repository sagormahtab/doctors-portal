import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PatientList from '../PatientList/PatientList';

const Appointments = () => {
    const [date, setDate] = useState(new Date());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [users, setUsers] = useState([]);

    const onChange = (date) =>{ 
        setDate(date);
        console.log(date);
    };

    
    
    useEffect(()=>{
        fetch('http://localhost:4200/appointment')
              .then(response => response.json())
              .then(json => {
                  setUsers(json)         
                })
    },[])
    
    return (
        <div className="container">
            <h2>Appointments</h2>
            <div className="row">
                <div className="col-md-6">
                    <Calendar
                    onChange={onChange}
                    value={date}
                    />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <h6 className="heading-color">Appointments</h6>
                        </div>
                        <div className="col-md-6">
                        <h6 className="text-end">{date.getDate()} {months[date.getMonth()]}, {date.getFullYear()}</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <p className="text-muted">Name</p>
                        <p className="text-muted">Schedule</p>
                        <p className="text-muted">Action</p>
                    </div>
                    {
                        <PatientList 
                        patients={users}
                        currDate = {date.getDate()}
                        currMonth = {months[date.getMonth()]}
                        currYear = {date.getFullYear()}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default Appointments;