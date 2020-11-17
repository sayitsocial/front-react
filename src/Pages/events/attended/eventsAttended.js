import React, { Component } from "react";
import Tabs from "../../../components/events/attended/tabs";
import EventCard from "../../../components/events/attended/eventCard";
import Check_boxes from "../../../components/events/attended/check/check";
import { Col, Row } from "react-bootstrap";
import "../../../components/events/attended/attended.scss";

class EventsAttended extends Component {
	render() {
		return (
			<>
				<Tabs />
				<Row className="main-row">
					<Col md={3}>
						<Check_boxes />
						<Check_boxes />
						<Check_boxes />
						<Check_boxes />
					</Col>
					<Col md={9}>
						<Row>
							<h1 className="card-category-title">Events you attended</h1>
							<div className="row-of-card">
								<Row>
									<Col md={4}>
										<EventCard />
									</Col>
									<Col md={4}>
										<EventCard />
									</Col>
									<Col md={4}>
										<EventCard />
									</Col>
								</Row>
							</div>
						</Row>
					</Col>
				</Row>
			</>
		);
	}
}

export default EventsAttended;
