import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getLocalWeather } from '../actions';

class Main extends Component {
	constructor(props) {
		super(props);

		this.props.getLocalWeather();
	}

	render() {
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
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, {getLocalWeather})(Main);