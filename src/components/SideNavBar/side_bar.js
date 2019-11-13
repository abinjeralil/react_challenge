import React from 'react';
import './side_bar.css';
import { Link } from "react-router-dom";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repcls1: "active",
            repcls2: "",
            repcls3: "",
            repcls4: ""
        }
    }

    render() {
        return (
            <aside className="aside-container">
                <div className="aside-inner">
                    <nav data-sidebar-anyclick-close="" className="sidebar">
                        <ul className="sidebar-nav">
                            <li key="menu-1" className={this.state.repcls1} >
                                <a title="Report1" href="/reports">
                                    <span>Report 1</span>
                                </a>
                            </li>
                            <li key="menu-2" className={this.state.repcls2} >
                                <a title="Report2" href="/ranches">
                                    <span>Report 2</span>
                                </a>
                            </li>
                            <li key="menu-3" className={this.state.repcls3} >
                                <a title="Report3" href="/dashboard">
                                    <span>Report 3</span>
                                </a>
                            </li>
                            <li key="menu-4" className={this.state.repcls4} >
                                <a title="Report4" href="/ranches">
                                    <span>Report 4</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default SideBar;