import React from 'react';

import './Modal.css'
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';



class Modal extends React.Component<Props, State>  {
  
  // important method to enhance performance and not update this component when other 
  // components are also updated. 
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log('[modal] will update')
  }

  render() {
    return (
    <Aux>
      <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
      <div className="Modal"
        style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1': '0'
        }}
      >
        {this.props.children}
      </div>
    </Aux>
    )
  }
}

export default Modal;