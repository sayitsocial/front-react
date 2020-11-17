import React from 'react';
import AttendeesWindow from '../../components/event/attendeesWindow';
import AttendEventInfo from '../../components/event/eventEventInfo';

class Event extends React.Component {
    render(){
        return(
            <main>
                <AttendeesWindow></AttendeesWindow>
                <AttendEventInfo></AttendEventInfo>
            </main>
        )
    }
}

export default Event;