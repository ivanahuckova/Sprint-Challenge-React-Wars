import React from "react";
import Dog from "./Dog";
import "./Dog.css";

export default function DogContainer({ dogs }) {
	return (
		<div className="environment-container">
			<div className="dogs-container">
				{dogs.map((dog, idx) => (
					<Dog key={idx} dog={dog} />
				))}
			</div>
		</div>
	);
}
