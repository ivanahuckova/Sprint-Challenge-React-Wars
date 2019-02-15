import React from "react";
import StarWarsDeck from "./StarWarsDeck";
import "./StarWars.css";

export default function StarWarsContainer({ starwarsChars }) {
	return (
		<div className="sw-container">
			{starwarsChars.map(char => (
				<StarWarsDeck key={char.name} char={char} />
			))}
		</div>
	);
}
