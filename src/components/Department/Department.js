import React from 'react';
import './Department.css'

const Department = (props) => {
    const {title, time, space} = props.department;
    return (
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title heading-color">{title}</h5>
                <h6>{time}</h6>
                <h6 className="small mb-4 text-uppercase text-muted"><strong><span>{space}</span> spaces available</strong></h6>
                <button className="btn btn-info text-uppercase">Book Appointment</button>
            </div>
            </div>
        </div>
    );
};

export default Department;