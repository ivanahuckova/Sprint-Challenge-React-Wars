import React from "react";
import Dog from "./Dog";

export default function DogContainer({ dogs }) {
	return (
		<div>
			{dogs.map((dog, idx) => (
				<Dog key={idx} dog={dog} />
			))}
		</div>
	);
}
