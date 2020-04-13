import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form'

const Title = (props) => {
    const [prescription, setPrescription] = useState(null);
    const [updateData, setUpdateData] = useState(null);
    const sendObj = {"prescription": true};
    
    const { register, handleSubmit, errors } = useForm()

    const requestSite1 = async data => {
        let response = await fetch('http://localhost:4200/prescription/'+props._id, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            let Data = await response.json()
            return Data
    }
    
    const requestSite2 = async data => {
        let response = await fetch('http://localhost:4200/updateAppointment/'+props._id,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        let Data = await response.json()
        return Data
    }
    
    const onSubmit = data =>{
        //data.preventDefault();
        data.name = props.patient.name;
        setPrescription(data);
        setUpdateData(sendObj);
        console.log(prescription,props._id);
        requestSite1(data);
        requestSite2(sendObj);
    }

    return (
        <div>
            <h2 className="text-center">Patient Name: {props.patient.name}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea className="form-control" name="prescription" rows="3" ref={register({ required: true })} placeholder="Prescription" ></textarea>
                {
                errors.name && <span className="error">Prescription is required</span>
                }
                <input className="btn btn-info" type="submit" />
            </form>
        </div>
    );
};

export default Title;


// const onSubmit = data => {
//     data.name = props.patient.name;
//     setPrescription(data);
//     console.log(prescription,props._id);
//     //setUpdateData(sendObj);
// }

// const isFirstRun = useRef(true);
//     useEffect(()=>{
//         if (isFirstRun.current) {
//             isFirstRun.current = false;
//             return;
//           }
//         fetch('http://localhost:4200/prescription/'+props._id, {
//                 method: 'POST',
//                 body: JSON.stringify(prescription),
//                 headers: {
//                   "Content-type": "application/json; charset=UTF-8"
//                 }
//               })
//               .then(response => response.json())
//               .then(json =>{
//                   console.log(json);
//                 })
//     },[prescription, props._id])

//     const isFirstRun2 = useRef(true);
//     useEffect( () => {
//         if (isFirstRun2.current) {
//             isFirstRun2.current = false;
//             return;
//           }
//         fetch('http://localhost:4200/updateAppointment/'+props._id,{
//             method: 'POST',
//             body: JSON.stringify(updateData),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         })
//         .then(response => response.json())
//         .then(json => console.log(json))
//       },[updateData,props._id])