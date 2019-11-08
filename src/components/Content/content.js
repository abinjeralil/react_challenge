import React from 'react';
import './content.css';
import PageTitle from '@Components/PageTitle/page_title';

class Content extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <PageTitle />
                <div className="map-content">
                    testtt
                </div>
                <div className="section-content">
                    <div className="section1-content">
                        sec1
                    </div>
                    <div className="section2-content">
                        sec2
                    </div>
                    <div className="section3-content">
                        sec3
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;