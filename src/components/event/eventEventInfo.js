import React from 'react';
import {Link} from 'react-router-dom';

class AttendEventInfo extends React.Component{
    render(){
        return(
            <>
            <div className="jumbotron banner-info  mt-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-auto">
                        <h1>Webinar: E-waste Management</h1>
                        <Link to="#">Category: Donations</Link>
                        <button type="button" className="btn btn-outline-danger">
                            Subtype :Activity
                        </button>
                        <br /><br />
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo
                                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna
                            </p>
                    </div>   
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-auto">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-auto">
                                <div class="text-right">
                                <img src={"https://picsum.photos/id/237/100"} alt="" />
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-auto">
                                <h5>Organised by <br />Child in Need Institute</h5>
                                <p>contact +123 123 1233</p>
                                <p>
                                    Value points
                                    <img src={"https://picsum.photos/id/870/20"} alt="" />
                                    <b>300</b>
                                </p>
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