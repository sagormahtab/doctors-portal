import React from 'react';
import './Patient.css'

const Patient = (props) => {
    console.log(props);
    const {name, appointTime} = props.patient;

    function msToTime(duration) {
        let seconds = Math.floor((duration / 1000) % 60);
        let minutes = Math.floor((duration / (1000 * 60)) % 60);
        let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
    
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
    
      return hours + ":" + minutes + ":" + seconds + ampm;
    }
    const time = msToTime(appointTime);
      
    return (
        <div className="d-flex mb-3 justify-content-between align-items-center">
            <p>{name}</p>
            <p>{time}</p>
            <div>
                <select id="inputState" class="form-control">
                    <option selected>Not Visited</option>
                    <option>Visited</option>
                </select>
            </div>
        </div>
    );
};

export default Patient;