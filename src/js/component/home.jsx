import React from "react";
import Card from "./Card.jsx";
import Navs from "./Navs.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";


//create your first component
const Home = () => {
	return (
		<>
			<div className="contariner-fluid  bg-dark">

				<div className="bg-light">

				<div className="row">
					<div className="">
						<Navs/>
					</div>
				</div>

				<div >
					<Jumbotron/>
				</div>

				<div>
					<div class="row mx-3 mt-3 mb-3 gap-4">
						<div className="col">
							<Card/>
						</div>
						<div className="col">
							<Card/>
						</div>
						<div className="col">
							<Card/>
						</div>
						<div className="col">
							<Card/>
						</div>
					</div>
				</div>

				<div className="Footer bg-dark">
					<Footer/>
				</div>

			</div>

					
				</div>
				
			
			
		
		
		
		
		</>
	);
};

export default Home;
