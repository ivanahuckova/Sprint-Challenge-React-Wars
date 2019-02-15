import React from "react";
import "./StarWars.css";

export default function StarWarsDeck({ char }) {
	return (
		<div key={char.name}>
			<h2>{char.name}</h2>
			<div>
				gender: <span>{char.gender}</span>
			</div>
			<div>
				height: <span>{char.height}</span>
			</div>
			<div>
				eye color: <span>{char.eye_color}</span>
			</div>
		</div>
	);
}
