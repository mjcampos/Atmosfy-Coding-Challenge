import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getLocalWeather } from '../actions';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showFahrenheit: true
		}
	}

	componentDidMount = () => {
		navigator.geolocation.getCurrentPosition(position => {
			var {latitude, longitude} = position.coords;

			this.props.getLocalWeather({
				lat: latitude,
				lon: longitude
			});
		});
	}

	displayTempType = () => {
		var { showFahrenheit } = this.state;
		const { celsius_temp, fahrenheit_temp } = this.props;

		return showFahrenheit ? <p>{fahrenheit_temp.toFixed(1)}<span>&#176;</span> Fahrenheit</p> : <p>{celsius_temp.toFixed(1)}<span>&#176;</span> Celsius</p>;
	}

	toggleTempType = () => this.setState({
		showFahrenheit: !this.state.showFahrenheit
	}, () => this.displayTempType())

	render() {
		console.log(this.props);
		const { showFahrenheit } = this.state;
		const { celsius_temp, fahrenheit_temp, city, country, icon } = this.props;

		return (
			<Container id={"Main-Body"}>
				{(celsius_temp || fahrenheit_temp) ? (
					<React.Fragment>
						{ !icon ? (
							<Jumbotron></Jumbotron>
						) : null}

						<Row>
							<Col xs={{ span: 6, offset: 3 }} id={"Main-Content"}>
								<p>The Temperature in your area:</p>

								<p>{city}, {country}</p>

								{ icon ? (
									<Image src={icon} rounded/>
								) : null}

								{this.displayTempType()}

								<Button onClick={() => this.toggleTempType()}>Switch to {!showFahrenheit ? "Fahrenheit" : "Celsius"}</Button>
							</Col>
						</Row>
					</React.Fragment>
				) : null}
			</Container>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, {getLocalWeather})(Main);