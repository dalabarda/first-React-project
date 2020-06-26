import React, { Component } from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
// import './style.css';


import './src/index.css';
import App2 from './src/App';
import registerServiceWorker from './src/registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


interface AppProps { }
interface AppState {
  name: string;
  age: number;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      age: 29
    };
  }

  render() {
    return (
      <div>
        <Person 
          name={this.state.name} 
          age={this.state.age}
        />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  } 
}

render(<App2 />, document.getElementById('root'));
registerServiceWorker();


// SUPPORTED EVENTS
// https://reactjs.org/docs/events.html#supported-events


// // style librarires
// styled-components
//  radium
// 
// https://github.com/css-modules/css-modules
// https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2
// 


// good way to organize components:

// 
// manage state for class based component. stateful -> state container..


// functional component is for presentation of content
  // presentational component (stateless) dumb -> props

