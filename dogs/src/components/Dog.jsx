import React from "react";
import "./Dog.css";

export default function Dog({ dog }) {
	return (
		<div className="dog-container">
			<img src={dog} />

			<div className="dogo-intro">This doggo gets</div>
			<div className="dogo-rating">{Math.floor(Math.random() * 10) + 11}/10 points!</div>
		</div>
	);
}
