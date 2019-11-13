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
			selectedMenu: "1",
			reportEndUrl: "report1"
		}

		this.switchReportEndUrl = this.switchReportEndUrl.bind(this);
	}

	componentDidMount() {
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

	switchReportEndUrl = (report_id) => {
		this.setState({
			reportEndUrl: ("report" + report_id),
			selectedMenu: report_id
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
				<Header />
				<SideNavBar selected={selectedMenu} switchReportEndUrl={switchReportEndUrl} />
				{reportContent}
				<Footer />
			</div>
		);
	}
}

export default Report1;