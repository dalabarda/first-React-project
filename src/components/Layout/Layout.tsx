import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';

interface   state {
    showSideDrawer: boolean;
  }

class Layout extends Component {
  state:state = {
    showSideDrawer: false
  }
  
  sideDrawerClosedHandler = () => {
    this.setState( {showSideDrawer: !this.state.showSideDrawer} );
  }
  
  sideDrawerToggleHandler = () => {
    // due to the async nature of state, the following code would lead to unexpected outcome
    // this.setState({showSideDrawer: !this.state.showSideDrawer})
    
    // better approach
    this.setState( (prevState: boolean) => {
      return {showSideDrawer: !prevState.showSideDrawer}; // secure way to toggle
    });
  }

  render () {
    return (
    <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler} />
        <main className="Content">
            {this.props.children}
        </main>
    </Aux>
    )
  }
}

export default Layout; 