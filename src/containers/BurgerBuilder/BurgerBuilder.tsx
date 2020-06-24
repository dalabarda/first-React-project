import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
  salsichao: 2.5,
};

// example of type
interface IPerson {
    name: string;
    gender: string;
}
interface ICitizen {
    readonly SSN: number;
}
interface IEmployee extends IPerson, ICitizen {
    empCode: number;
}

interface IIngredientsAmount {
  ingredients: {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
    salsichao: number;
  }
  totalPrice: number;
  purchaseable: boolean;
  purchasing: boolean;
}


class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
  state:IIngredientsAmount = {
      ingredients: {
          salad: 0,
          bacon: 0,
          cheese: 0,
          meat: 0,
          salsichao: 0,
      },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
  }

  updatePurchaseState (ingredients) {
    // const ingredients = {
    //   ...this.state.ingredients
    // };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({purchaseable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;

    // because state should be updated in a immutable way...
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    
    // because state should be updated in a immutable way...
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
  }

  // if a method is triggered throw an event. a methodd with 'this' keyword will no work. 'this' will not refer to the class
  // a workaround is changing it through an arrow function. like the example bellow. NOT purchaseHandler() {...}
  purchaseHandler = () => { // -> this 
    this.setState({purchasing: true});
  }

    render () {
      const disabledInfo = {
        ...this.state.ingredients // {salad: true, meat: false, ...}
      };
      for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
      }
        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                  <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={ this.state.ingredients } />
                <BuildControls 
                  ingredientAdded={this.addIngredientHandler}
                  ingredientRemoved={this.removeIngredientHandler}
                  disabled={disabledInfo}
                  purchaseable={this.state.purchaseable}
                  price={this.state.totalPrice}
                  ordered={this.purchaseHandler}
                  />
            </Aux>
        );
    }
}

export default BurgerBuilder;