import React from 'react';
import { Link } from 'react-router-dom';

class AttendEventInfo extends React.Component {
    render () {
        return (
            <>
                <div className="jumbotron banner-info  mt-5">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-auto">
                            <h1>{this.props.event_name}</h1>
                            <Link to="#">Category: {this.props.category_name}</Link>
                            <button type="button" className="subtype-activity btn btn-outline-danger">
                                Subtype :Activity
                            </button>
                            <br /><br />
                            <p>
                                {this.props.event_desc}
                            </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-auto">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-auto">
                                    <div className="text-right">
                                        <img src={"https://picsum.photos/id/237/100"} alt="" />
                                    </div>
                                </div>
                                <div className="event-organizer-info col-xl-6 col-lg-6 col-md-12 col-sm-12 col-auto">
                                    <h5>Organised by <br /><strong>{this.props.organiser_name}</strong></h5>
                                    <p>contact {this.props.organizer_contact_phone}</p>
                                    <span className="flex-points">
                                        <p>Value points</p>
                                        <p>
                                            <img src={"https://picsum.photos/id/870/20"} alt="" />
                                            <b className="points">300</b>
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AttendEventInfo;