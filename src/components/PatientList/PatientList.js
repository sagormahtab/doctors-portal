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

    for(let i = 0; i < patients.length; i++){
        patients[i].serial = i + 1;
    }
    return (
        <div>
            {
                props.allPatient ?
                patients.map(pt=>
                    <Patient
                    patient={pt}
                    allPatient = {true}
                    />
                    ) :
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