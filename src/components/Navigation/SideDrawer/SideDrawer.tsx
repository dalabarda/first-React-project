import React from 'react';

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


import './SideDrawer.css';

const sideDrawer = ( props ) => {
  // ...
  return (
    <Aux>
      <Modal />
      <div className="SideDrawer">
        <div className="Logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
)};

export default sideDrawer; 