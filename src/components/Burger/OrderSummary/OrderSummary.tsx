import React, { Component } from 'react';
import { withRouter, RouteProps } from 'react-router';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

// this interface is so stupid, but it can solve this problem.
export interface Props {
  match: {
    params: {
      id: string
    }
  }
}

interface State {
  id: string;
}

class OrderSummary extends React.Component<Props & RouteProps, State> {
  
  componentDidUpdate() {
    console.log('[OrderSummary] DidUpdate')
  }
  
  render() {
    const ingredientSummary = Object.keys( this.props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>
          : { this.props.ingredients[igKey] }
        </li>);
    } );

    return (
      <Aux>
      <h3> Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>TOTAL PRICE: { this.props.price.toFixed(2) }</p>
      <p>Continue ti Checkout?</p>
      <Button btnType="Danger"  clicked={this.props.purchaseCancelled}> CANCEL </Button>
      <Button btnType="Success" clicked={this.props.purchaseContinued}> CONTINUE </Button>
    </Aux>
    )
  }
}

export default OrderSummary