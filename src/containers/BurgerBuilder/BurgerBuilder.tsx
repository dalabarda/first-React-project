import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
                <Burger ingredients={ this.state.ingredients } />
                <BuildControls 
                  ingredientAdded={this.addIngredientHandler}
                  ingredientRemoved={this.removeIngredientHandler}
                  disabled={disabledInfo}
                  price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;