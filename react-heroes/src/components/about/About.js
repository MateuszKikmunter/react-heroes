import React from 'react';

const About = () => {
	return (
		<div className="card w-three-quarter">
			<section>
				<h2 className="card-title border-bottom">ℹ️ About</h2>
				<p>
					This project was created to practice and improve my React
					skills and it is a React version of Angular tutorial{' '}
					<a
						href="https://angular.io/tutorial"
						target="_blank"
						rel="noopener noreferrer"
					>
						tour of heroes
					</a>
					.
				</p>
				<p>
					I am still a beginner user of this library and this
					application is fairly basic but it will be extended in the
					future while I am learning more about React development.
				</p>
				<p>
					Despite its simplicity, this app makes use of such concepts
					as hooks, effects, routing, HTTP calls and basic state
					management.
				</p>
				<p>
					It also uses JSON server. This makes it easier to use as no
					database is required.
				</p>
			</section>
			<section>
				<h2 className="card-title border-bottom">
					⚙️ Future Development
				</h2>
				<p>
					Along my React journey I am planning to extend this
					application also with such things as:
				</p>
				<ul>
					<li>unit and integration tests</li>
					<li>proper state management with Redux or Zustand</li>
					<li>containerisation and Docker usage</li>
				</ul>
			</section>
			<section>
				<h2 className="card-title border-bottom">💻 Tech stack</h2>
				<p>This application has been created with:</p>
				<ul>
					<li>
						<a
							href="https://reactjs.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							React
						</a>
					</li>
					<li>
						<a
							href="https://github.com/typicode/json-server"
							target="_blank"
							rel="noopener noreferrer"
						>
							JSON server
						</a>
					</li>
					<li>
						<a
							href="https://www.gethalfmoon.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Halfmoon
						</a>
					</li>
					<li>
						<a
							href="https://create-react-app.dev/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Create React App
						</a>
					</li>
					<li>
						<a
							href="https://eslint.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							ESlint
						</a>
					</li>
					<li>
						<a
							href="https://prettier.io/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Prettier
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default About;
