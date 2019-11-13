import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header className='white-header'>
                <div className="options-icon">
                    <Link to="/reports"><b>Reports</b></Link>
                </div>
                <div className="header-logo">
                    <b>Welcome</b>
                </div>
                <div className='logged-in-user'>
                    <b>User Name</b>
                </div>
            </header>
        );
    }
}

export default Header;