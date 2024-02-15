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
      <Dashboard />
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
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default App;
