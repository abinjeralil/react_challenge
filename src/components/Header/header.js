import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className='white-header'>
                <div className="options-icon">
                    <b>Menu</b>
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