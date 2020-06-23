import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    // props.ingredients -> {salad: 0, bacon: 0, cheese: 0, meat: 0…}
    // getting an array of strings from ingredients object keys
    let transformedIngredients = Object.keys( props.ingredients ) // ["salad", "bacon", "meat", ...]
        .map( igKey => {
            return Array(props.ingredients[igKey]).fill(igKey)
              .map( ( _, i ) => { // index is important here
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } ) // --> returns an array of arrays [[],[],[],[]]
        .reduce((arr, el) => {
            return arr.concat(el) // flattening the array in case the previous is empty ----> []
        }, []);

        // transformedIngredients []
        
    if (transformedIngredients.length === 0) {
        console.log(transformedIngredients)
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            { transformedIngredients }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;