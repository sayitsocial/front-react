import React, { Component } from "react";
import { Badge } from "react-bootstrap";

class Labels extends Component {
	render() {
		return (
			<>
				<label className="form-check">
					<input className="form-check-input" type="checkbox" />
					<span className="form-check-label">
						Get Together
						<Badge className="check-badge" variant="dark">
							5
						</Badge>
					</span>
				</label>
			</>
		);
	}
}

export default Labels;
