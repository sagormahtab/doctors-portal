import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Department.css';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { TimePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';



const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);



const Department = (props) => {
    const { title, time, space } = props.department;
    const [appointInfo, setAppointInfo] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    const {date, month, year} = props;
    const prescription = false;
    const action = "pending";


    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    let appointTime;
    const onChange = (time, timeString) => {
      console.log(time, timeString);
      appointTime = time._d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }

    const onSubmit = data => {
        setAppointInfo({...data, appointTime, date, month, year, prescription, action});
      }
    useEffect(()=>{
        fetch('https://immense-inlet-46501.herokuapp.com/appointment', {
            method: 'POST',
            body: JSON.stringify(appointInfo),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            handleClose();
            alert("Your appointment was successful. Your appointment ID is "+json._id);
        })
    },[appointInfo])
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title heading-color">{title}</h5>
                    <h6>{time}</h6>
                    <h6 className="small mb-4 text-uppercase text-muted"><strong><span>{space}</span> spaces available</strong></h6>
                    <button className="btn btn-info text-uppercase" onClick={handleClickOpen}>Book Appointment</button>

                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {title}
                    </DialogTitle>
                    <DialogContent dividers>
                        <form className="appointment-form" onSubmit={handleSubmit(onSubmit)}>
                            
                            <TimePicker onChange={onChange} style={{width: '100%', marginBottom: '2vh', borderRadius: '7px'}} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />

                            <input name="name" ref={register({ required: true })} placeholder="Your Name" />
                            {
                                errors.name && <span className="error">Name is required</span>
                            }

                            <input name="phone" ref={register({ required: true })} placeholder="Phone Number" />
                            {
                                errors.name && <span className="error">Name is required</span>
                            }

                            <input name="email" ref={register({ required: true })} placeholder="Email" />
                            {
                                errors.email && <span className="error">Email is required</span>
                            }

                            <input className="btn btn-info" type="submit" />
                        </form>
                    </DialogContent>
                </Dialog>

                </div>
            </div>
        </div>
    );
};

export default Department;