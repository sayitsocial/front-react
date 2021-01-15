import React from 'react';
// import CancelAttendButton from './cancelAttendButton';
import AttendButton from './attendButton';


class AttendeesWindow extends React.Component {
    render(){
        return(
        <>
        <div className="jumbotron banner mt-5">
            <div className="banner-container">
                {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-auto">
                    <h4>
                        <span className="mr-auto"><i>icon</i> 300 Attendees</span>
                    </h4>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-auto">
                    <h4>
                    <span className="mr-auto"><i>icon</i> in person event</span>
                    </h4>
                </div> */}
                <div className="flex-banner-top">
                    <div className="attendees-info"><i><img src={process.env.PUBLIC_URL + "/event/attendence.png"} /></i>300 Attendees</div>
                    <div className="event-info"><i><img src={process.env.PUBLIC_URL + "/event/video.png"}/></i> in Person Event</div>
                </div>

                <div className="flex-banner-bottom">
                    <div className="event-date white-card"><i>icon </i> Sat. 15 Aug. 2020 at 04:00 PM</div>
                    <div className="event-buttons">
                        <AttendButton />
                        {/* <CancelAttendButton /> */}
                    </div>
                </div>
            </div>

            {/* <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-auto">
                    <div className="card">
                    <h6><span> icon </span> Sat. 15 Aug. 2020 at 04:00 PM</h6>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-auto">
                    <h4>
                        <span className="mr-auto"
                            ><i>icon</i> Attending
                            <button className="btn btn-primary">Cancle</button>
                        </span>
                    </h4>
                </div>
            </div> */}
        </div>
        </>
        )
    }
}

export default AttendeesWindow;