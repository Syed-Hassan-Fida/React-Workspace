import React, { Component } from 'react';
import './App.css'
import ParentComponent from './components/ParentComponent';
import Form from './components/Form';
import ParentComp from './components/ParentComp';

// Higher Order Component function
const withLogging = (WrappedComponent) => {
  class WithLogging extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is unmounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogging;
};

// Your regular functional component
const MyComponent = (props) => {
  return (
    <div>
      <p>My Component</p>
      {/* Your component logic goes here */}
    </div>
  );
};

// Wrap your component with the HOC
const MyComponentWithLogging = withLogging(MyComponent);

// Now use MyComponentWithLogging in your app
const App = () => {

  return (
    <div className='App'>
      {/* <ParentComp /> */}
      <Form/>
      {/* <ParentComponent /> */}
      {/* <h1>Higher Order Component Example</h1> */}
      {/* <MyComponentWithLogging /> */}
    </div>
  );
};

export default App;
