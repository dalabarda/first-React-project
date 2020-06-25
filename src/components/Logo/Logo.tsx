import React from 'react';

// import Aux from '../../hoc/Aux';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = ( props ) => (
    <div className="Logo">
      <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo; 