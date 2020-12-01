import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Kuber from '../../favicon.png'

const Stripe = ({ price }) => {
    const priceStripe = price * 100;
    const pk = "pk_test_51HtRzGJJ3vzU98fsucOW4Ffwx9tu5q0iw68X70U9gJ1ggKfEFlbvlYS5g09gMyWiTsE4xdj82Ta0KzyBFqZP6Q7X00S2IchGoT";
    const onToken = token => {

    }
    return (
        <StripeCheckout
            label='Complete Payment'
            name='Kuber'
            billingAddress
            shippingAddress
            image={Kuber}
            description={`The total amount is $${price}`}
            amount={priceStripe}
            panelLabel='Complete Purchase'
            token={onToken}
            stripeKey={pk}
        />
    )
}

export default Stripe;