import React from "react";
import Card from "./Card.jsx";
import Navs from "./Navs.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">

			<Navs/>
			<Card/>
		</div>
	);
};

export default Home;
