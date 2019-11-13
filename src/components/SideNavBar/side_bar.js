import React from 'react';
import './side_bar.css';

const initState = {
	repcls1: "",
	repcls2: "",
	repcls3: "",
	repcls4: ""
};

class SideBar extends React.Component {
	constructor(props) {
		super(props);
		const defaultState = { ...initState, ...{ repcls1: "active" } };
		this.state = defaultState;
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event, reportId) {
		event.preventDefault();
		const activeClass = 'repcls' + reportId;
		const changeState = {
			[activeClass]: "active"
		}
		const newState = { ...initState, ...changeState };
		this.setState(newState);
		this.props.switchReport(event, reportId);
	}

	render() {
		return (
			<aside className="aside-container">
				<div className="aside-inner">
					<nav data-sidebar-anyclick-close="" className="sidebar">
						<ul className="sidebar-nav">
							<li key="menu-1" className={this.state.repcls1} >
								<a title="Report1" href="#" onClick={(e) => this.handleClick(e, 1)} >
									<span>Report 1</span>
								</a>
							</li>
							<li key="menu-2" className={this.state.repcls2} >
								<a title="Report2" href="#" onClick={(e) => this.handleClick(e, 2)} >
									<span>Report 2</span>
								</a>
							</li>
							<li key="menu-3" className={this.state.repcls3} >
								<a title="Report3" href="#" onClick={(e) => this.handleClick(e, 3)} >
									<span>Report 3</span>
								</a>
							</li>
							<li key="menu-4" className={this.state.repcls4} >
								<a title="Report4" href="#" onClick={(e) => this.handleClick(e, 4)} >
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