import React from "react";
import "./Dog.css";

export default function Dog({ dog }) {
	return (
		<div className="dog-container">
			<img src={dog} />
		</div>
	);
}
