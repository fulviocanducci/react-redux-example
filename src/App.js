import React, { useState } from 'react';
import { guid } from './utils';
import { connect } from "react-redux";
import { ADD_COUNTER, CHANGE_INPUT, ADD_NEW_ITEM } from './actions/constants';
import { ChangeNameInput, Counter, ListOf } from './components';

const mapStateToProps = state => {  
  return {     
    counter: state.counter, 
    value: state.value,
    list: state.list
  };
};

function App(props) {  
  const {value, counter, list, dispatch} = props;
  const [input, setInput] = useState(value);  
  function sendStateDispatch(type, payload) {
    dispatch({type, payload});    
  }
  function handleClickSum() {        
    sendStateDispatch(ADD_COUNTER, {...props, counter: counter + 1});
  }
  function handleClickNewItem() {
    sendStateDispatch(ADD_NEW_ITEM, {...props, list: [...list, guid()]});
  }
  function handleChangeInput() {    
    sendStateDispatch(CHANGE_INPUT, {...props, value: input});
  }  
  return (
    <>
      <ChangeNameInput 
        value={value} 
        input={input} 
        onChangeInput={e => setInput(e.target.value)} 
        onClickButton={handleChangeInput}
      />
      <Counter 
        counter={counter} 
        onClickButton={handleClickSum} 
      />
      <ListOf 
        lists={list}
        onClickButton={handleClickNewItem}
      />
    </>
  );
}

export default connect(mapStateToProps)(App);
