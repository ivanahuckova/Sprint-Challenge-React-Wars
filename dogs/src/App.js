import React, { Component } from "react";
import "./App.css";
import DogContainer from "./components/DogContainer";

class App extends Component {
	constructor() {
		super();
		this.state = {
			dogs: []
		};
	}

	componentDidMount() {
		this.getCharacters("https://dog.ceo/api/breeds/image/random/50");
	}

	getCharacters = URL => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				this.setState({ dogs: data.message });
			})
			.catch(err => {
				throw new Error(err);
			});
	};

	render() {
		const { dogs } = this.state;
		return (
			<div className="App">
				<h1 className="Header">Doggo Rates</h1>
				<DogContainer dogs={dogs} />
			</div>
		);
	}
}

export default App;
