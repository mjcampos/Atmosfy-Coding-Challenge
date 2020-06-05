import React from 'react';

const ErrorMessage = ({geolocRetrievalFailed_message}) => (
	<React.Fragment>
		<p>Unable to retrieve the weather in your area</p>
		<h4>{geolocRetrievalFailed_message}</h4>
		<p>Please try again!</p>
	</React.Fragment>
);

export default ErrorMessage;