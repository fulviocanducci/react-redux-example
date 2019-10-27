import React, { useState } from 'react';
import { guid } from './utils';
import { connect } from "react-redux";
import { ADD_COUNTER, CHANGE_INPUT, ADD_NEW_ITEM } from './actions/constants';

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
      <div>
        {value}
      </div>
      <div>
          <input value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={handleChangeInput}>Alterar Nome</button>
      </div>      
      <div>
        {counter}
      </div>
      <div>
        <button onClick={handleClickSum}>Acrescenter</button>
      </div>
      <div>
        <ul>
          {list.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
        <div>
          <button onClick={handleClickNewItem}>Novo Item</button>
        </div>
      </div>
      <div>
        <pre>{JSON.stringify(props)}</pre>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(App);
