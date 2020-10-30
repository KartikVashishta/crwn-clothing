import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51HUE9RJ4zFBBdBn56FMVzCQM5JC0BDn8bPvMIYM1saeKiKoN6Ez6rMrpAmEXSW8fLBolJ8suLkKHk1NJSOmcdFBs00fslJXHtG';

	const onToken = token => {
		console.log(token);
		alert('Payment Succesful!');
	};

	return (
		<StripeCheckout
			label='Pay Now &#128179;'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
