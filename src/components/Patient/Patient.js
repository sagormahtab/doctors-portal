import React from 'react';
import './Patient.css'
import { Link } from 'react-router-dom';

const Patient = (props) => {
    console.log(props);
    const {_id,name, appointTime, serial, date, month, year, phone,prescription} = props.patient;

    const time = appointTime;
      
    return (
        <div>
            {
                props.allPatient ?
                <div className="d-flex mb-3 justify-content-between align-items-center">
                    <p>{serial}</p>
                    <p>{date}-{month}-{year}</p>
                    <p>{time}</p>
                    <p>{name}</p>
                    <p>{phone}</p>
                    {
                        prescription ?
                        <Link to={"/prescription/"+_id}><button className="btn btn-info">View</button></Link> :
                        <Link to={"/prescription/"+_id}><button className="btn btn-light">Not Added</button></Link>
                    }
                    <div>
                        <select className="form-control inputState">
                            <option defaultValue>Pending</option>
                            <option>Approved</option>
                            <option>Cancelled</option>
                        </select>
                    </div>
                </div>
                :
                <div className="d-flex mb-3 justify-content-between align-items-center">
                    <p>{name}</p>
                    <p>{time}</p>
                    <div>
                        <select className="form-control inputState">
                            <option defaultValue>Not Visited</option>
                            <option>Visited</option>
                        </select>
                    </div>
                </div>
            }
        </div>
    );
};

export default Patient;