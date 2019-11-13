import React from 'react';
import Header from '@Components/Header/header';
import Footer from '@Components/Footer/footer';
import Content from '@Components/Content/content';

import './home.css';

class Home extends React.Component {
	render() {
		return (
			<div className="common-wrapper">
				<Header page="home" />
				<Content />
				<Footer />
			</div>
		);
	}
}

export default Home;