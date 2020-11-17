import React, { Component } from "react";
import Labels from "../check/labels";

class Check_boxes extends Component {
	render() {
		return (
			<>
				<div>
					<h6 className="title">In-Person</h6>
					<form className="label-check">
						<Labels />
					</form>
				</div>
			</>
		);
	}
}

export default Check_boxes;
