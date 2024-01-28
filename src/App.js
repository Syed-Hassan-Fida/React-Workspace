import React, { Component, useState } from 'react';
import './App.css'
import ParentComponent from './components/ParentComponent';
import Form from './components/Form';
import ParentComp from './components/ParentComp';
import Portal from './components/Portal';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Main from './components/renderProps/Main';
import ContextMain from './components/Context/ContextMain';
import MainAxios from './components/axiosRequests/MainAxios';
import MainReactHooks from './components/ReactHooks/MainReactHooks';
import MainRedux from './components/ReduxComponents/MainRedux';
import MainUseReducer from './components/useReduer/MainUseReducer';
import MainUseCallBack from './components/UseCallBack/MainUseCallBack';
import Dashboard from './remainder/Dashboard';
import MainUseMemoHook from './components/useMemoHook/MainUseMemoHook';

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
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div>
      {/* <MainUseMemoHook/> */}
      <Dashboard/>
      {/* <ErrorBoundary> */}
        {/* <MainUseCallBack/> */}
        {/* <MainUseReducer/> */}
        {/* <MainRedux/> */}
        {/* <MainReactHooks/> */}
        {/* <MainAxios/> */}
        {/* <ContextMain/> */}
        {/* <ClickCounter name="Hassan"/>
        <HoverCounter/>

        <Main/> */}
        {/* <button onClick={openModal}>Open Modal</button>
        {modalVisible && (
          <Portal onClose={closeModal} name="joker">
            <h2>This is a modal!</h2>
            <p>Click outside the modal or the close button to close it.</p>
          </Portal>
        )} */}
        {/* <ParentComp /> */}
        {/* <Form/> */}
        {/* <ParentComponent /> */}
        {/* <h1>Higher Order Component Example</h1> */}
        {/* <MyComponentWithLogging /> */}
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default App;
