import React, { useEffect } from 'react';
import './Appointment.css';
import machine from '../../images/op-machine.png';
import banner from '../../images/banner-header.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Department from '../Department/Department';

const Appointment = () => {
    const [department, setDepartment] = useState([]);

    const [date, setDate] = useState(new Date());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const onChange = (date) =>{ 
        setDate(date);
        console.log(date);
    };

    useEffect(()=>{
        fetch('https://immense-inlet-46501.herokuapp.com/department')
        .then(response => response.json())
        .then(json => setDepartment(json))
    },[])

    return (
        <div className="header" style={{backgroundImage: `url(${banner})`}}>
            <div className="container">
            <div className="row calendar-img align-items-center justify-content-between">
                <div className="col-md-4">
                    <h2 className="mb-4">Appointment</h2>
                    <Calendar
                    onChange={onChange}
                    value={date}
                    />
                </div>
                <div className="col-md-6">
                    <img className="op-machine" src={machine} alt=""/>
                </div>
            </div>
            <h2 className="my-5 text-center">Available Apointments on {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</h2>
            <div className="row">
                {
                    department.map(dpt =>
                        <Department
                        department = {dpt}
                        month = {months[date.getMonth()]}
                        date = {date.getDate()}
                        year = {date.getFullYear()}
                        />
                    )
                }
            </div>
            </div>
        </div>
    );
};

export default Appointment;