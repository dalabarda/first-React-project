import React, 
  { 
    Component,  // class based component
    useState    // 16.8 -> able to use hooks; functional component 
  }
  from 'react';


const Person = ( props ) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

// class based component
class Test extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28 },
      {name: 'Manu', age: 29 },
      {name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value'
  };


  switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = 'Daniel';
    this.setState({
      persons: [

      ]
    })
  }
};

const person2 = ( props ) => {
  const [personsState, setPersonsState] = useState({ // returns an array with only 2 elements. 1 current state; 2 function 
  persons: [
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 26 }
  ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  console.log(personsState.persons.forEach(item => console.log(item)))


    return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
    )
};

export default person2;





// export default ({ name }) => <h1>Hello {name}!</h1>;



// REACT NOTES:
// default way -> class based component 
// react hooks is optional -> functional component 

// React Hooks:
//  collection of functions exposed by react that you can use in functional components;