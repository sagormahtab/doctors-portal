import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/">About</a>
                        <a className="nav-item nav-link" href="/">Doctors</a>
                        <a className="nav-item nav-link last3" href="/">Reviews</a>
                        <a className="nav-item nav-link last3" href="/">Blog</a>
                        <a className="nav-item nav-link last3" href="/">Contact Us</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;