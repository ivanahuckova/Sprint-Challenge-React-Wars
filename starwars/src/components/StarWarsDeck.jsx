import React from "react";
import "./StarWars.css";

export default function StarWarsDeck({ char }) {
	return (
		<div key={char.name} className="character-container">
			<img className="portrait-image" src={`https://robohash.org/${char.name}`} />
			<h2>{char.name}</h2>

			<div>
				gender: <span>{char.gender}</span>
			</div>
			<div>
				height: <span>{char.height} cm</span>
			</div>
			<div>
				eye color: <span>{char.eye_color}</span>
			</div>
			<div className="image-container">
				<img src="https://cdn.vox-cdn.com/thumbor/UHTSj3_-peudjTCtAEEfH9Rm8E4=/0x0:1536x864/1200x800/filters:focal(646x310:890x554)/cdn.vox-cdn.com/uploads/chorus_image/image/58953911/star_wars_logo_new_tall.0.jpg" />
			</div>
		</div>
	);
}
