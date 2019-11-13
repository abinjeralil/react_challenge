import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: "home"
		};
	}

	componentDidMount() {
		this.setState((state, props) => ({
			currentPage: props.page
		}));
	}
	render() {
		const { currentPage } = this.state;
		return (
			<header className='white-header'>
				<div className="options-icon">
					{(currentPage == "home") ? (
						<Link to="/reports"><b>Reports</b></Link>
					) : (
							<Link to="/"><b>Home</b></Link>
						)}
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