import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const addSnack = (state = [], action) => {
    if(action.type === "ADD_SNACK_INFO"){
        state = [...state, action.payload];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        addSnack
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
