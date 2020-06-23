import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

interface Ingredients {
  label: string;
  type: string;
}

const controls:Ingredients[] = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
  { label: 'Salsichao', type: 'salsichao'},
];


const buildControls = (props) => (
  <div className="BuildControls">
    <p>Current Price: {props.price}</p>
    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
  </div>
);

export default buildControls;