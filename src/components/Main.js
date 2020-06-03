import React from 'react';
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap';

function Main() {
	return (
		<Container id={"Main-Body"}>
			<Jumbotron></Jumbotron>

			<Row>
				<Col xs={{ span: 6, offset: 3 }} id={"Main-Content"}>
					<p>Your Temperature in</p>

					<p>San Jose, CA</p>

					<p>99 Degrees Fahrenheit</p>

					<Button>Switch to Celsius</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default Main;