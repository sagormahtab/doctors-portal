import React from 'react';
import './Header.css';
import machine from '../../images/op-machine.png';
import banner from '../../images/banner-header.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header" style={{backgroundImage: `url(${banner})`}}>
            <div className="container">
            <div className="row banner align-items-center justify-content-between">
                <div className="col-md-4">
                        <h1 className="text-capitalize">Your new smile starts here</h1>
                        <p className="my-4">Cillum ullamco nisi voluptate culpa minim exercitation proident ea anim velit in proident incididunt laboris. Voluptate cupidatat culpa pariatur occaecat ex minim excepteur eu.</p>
                        <Link to="/appointment"><button className="btn btn-info text-uppercase">get appointment</button></Link>
                </div>
                <div className="col-md-6">
                    <img className="op-machine" src={machine} alt=""/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;