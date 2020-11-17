import React, { Component } from "react";

class EventCard extends Component {
	render() {
		return (
			<>
				<div className="card">
					<img
						className="card-img-top"
						src="https://picsum.photos/id/1005/300/200"
						alt="Card image cap"
					/>
					<div className="card-img-overlay">
						<span className="badge badge-warning">In-Person</span>
					</div>
					<div className="card-body">
						<h5 className="card-title">
							Data Science Meetup <br />
							<span>
								<small>12 SEPT MONDAY 2020</small>
							</span>
						</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk.
						</p>
					</div>
					<div className="card-footer">
						<h6>Big Events pvt. ltd.</h6>
						<p className="user">
							<img
								className="rounded-circle"
								width="30"
								src="http://jlantunez.com/imgs/avatar.jpg"
								alt="Avatar"
							/>
							<strong className="joined">
								<a title="Full Name" href="#">
									18k people joined
								</a>
							</strong>
						</p>
					</div>
				</div>
			</>
		);
	}
}

export default EventCard;
