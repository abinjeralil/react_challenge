import React from 'react';
import Header from '@Components/Header/header';
import Footer from '@Components/Footer/footer';
import SideNavBar from '@Components/SideNavBar/side_bar';
import TableFrame from '../../components/TableFrame/index';

import './report.css';

const BASE_URL = "http://localhost:3092/";

class Report1 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			reportData: [],
			reportEndUrl: "report1"
		}

		this.switchReport = this.switchReport.bind(this);
		this.fetchSelectedReport = this.fetchSelectedReport.bind(this);
	}

	componentDidMount() {
		this.fetchSelectedReport();
	}

	fetchSelectedReport() {
		const reportUrl = BASE_URL + this.state.reportEndUrl + "/";
		fetch(reportUrl)
		.then((response) => response.json())
		.then((result) => {
			this.setState({
				error: null,
				isLoaded: true,
				reportData: result
			});
		})
		.catch((error) => {
			this.setState({
				error: error,
				isLoaded: true,
				reportData: []
			});
		});
	}

	switchReport(event, report_id) {
		this.setState({
			reportEndUrl: ("report" + report_id),
		}, () => {
			this.fetchSelectedReport();
		});
	}

	render() {
		const { error, isLoaded, reportData, selectedMenu } = this.state;
		let reportContent;
		if (error) {
			reportContent = <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			reportContent = <div>Loading... Please Wait.</div>;
		} else {
			reportContent = <TableFrame data={reportData} />;
		}
		return (
			<div className="common-wrapper">
				<Header page="reports"/>
				<SideNavBar selected={selectedMenu} switchReport={this.switchReport}/>
				{reportContent}
				<Footer />
			</div>
		);
	}
}

export default Report1;