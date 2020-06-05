import React, { Component } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Loader from './Loader';
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
		const { showFahrenheit } = this.state;
		const { celsius_temp, fahrenheit_temp, city, country, icon } = this.props;

		return (
			<Container id={"Main-Body"}>
				<Row>
					<Col xs={{ span: 6, offset: 3 }} id={"Main-Content"}>
						{(celsius_temp || fahrenheit_temp) ? (
							<React.Fragment>
								<p>The Temperature in your area:</p>

								<p>{city}, {country}</p>

								<Image src={icon} alt={"Weather icon"} rounded/>

								{this.displayTempType()}

								<Button onClick={() => this.toggleTempType()}>Switch to {!showFahrenheit ? "Fahrenheit" : "Celsius"}</Button>
							</React.Fragment>
						) : <Loader/>}
					</Col>
				</Row>
			</Container>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, {getLocalWeather})(Main);