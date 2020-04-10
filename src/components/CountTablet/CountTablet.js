import React from 'react';

const CountTablet = (props) => {
    const patients = props.patient;
    const length = props.patient.length;
    const {name, color} = props.patient.tablet;
    const todaysDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currDate = todaysDate.getDate();
    const currMonth = months[todaysDate.getMonth()];
    const currYear = todaysDate.getFullYear();

    let eliPatients = [];
    for(let i = 0; i < length; i++){
        if((patients[i].date === currDate) && (patients[i].month === currMonth) && (patients[i].year === currYear)){
            eliPatients = [...eliPatients, patients[i]];
        }
    }
    const activeLength = eliPatients.length;

    return (
        <div className="col-md-3">
            <div className={"card "+color} style={{height: '13vh'}}>
                <div className="card-body d-flex align-items-center">
                    <h2 className="mr-4 text-white">{name === "Today's Appointment" ? activeLength : length}</h2>
                    <h5 className="text-white">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default CountTablet;