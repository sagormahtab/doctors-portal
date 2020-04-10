import React from 'react';
import Patient from '../Patient/Patient';

const PatientList = (props) => {
    const {patients, currDate, currMonth, currYear} = props;

        let eliPatients = [];
    for(let i = 0; i < patients.length; i++){
        if((patients[i].date === currDate) && (patients[i].month === currMonth) && (patients[i].year === currYear)){
            eliPatients = [...eliPatients, patients[i]];
        }
    }
    return (
        <div>
            {
                eliPatients.map(pt=>
                    <Patient 
                    patient = {pt}
                    />
                    )
            }
        </div>
    );
};

export default PatientList;