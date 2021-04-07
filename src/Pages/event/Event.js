import React from 'react';
import AttendeesWindow from '../../components/event/attendeesWindow';
import AttendEventInfo from '../../components/event/eventEventInfo';
import Axios from "axios";
import { populateUrl } from '../../constants';

class Event extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            event: [],
        };
    }

    async componentDidMount () {
        const res = await Axios.get(populateUrl(`/api/event/get?event_id=${this.props.match.params.id}`));
        if (res.data.length > 0) {
            let host = await this.getEventHost()
            if (host.length > 0)
                res.data[0]["host"] = host[0]
            this.setState({ event: res.data });
        }
        console.log(this.state.event)
    }

    async getEventHost () {
        const res = await Axios.get(populateUrl(`/api/event/host?event_id=${this.props.match.params.id}`));
        return res.data
    }

    render () {
        return (
            <main>
                <AttendeesWindow></AttendeesWindow>
                {this.state.event.map((value) => (
                    <AttendEventInfo key={value.event_id} event_name={value.name} event_desc={value.description} category_name={value.category.name} organiser_name={value.host.organisation.display_name} organizer_contact_phone={value.host.organisation.contact_phone} ></AttendEventInfo>
                ))}
            </main>
        )
    }
}

export default Event;