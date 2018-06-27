import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const manageSnacks = (state = [], action) => {
    if(action.type === "ADD_SNACK_INFO"){
        return [...state, action.payload];
    }
    else if(action.type === "EAT_A_SNACK"){
        console.log('Eating');
        for(let i = 0; i < state.length; i++){
            if(state[i].id === action.payload){
                state.splice(i, 1);
                
            }
        }
        console.log(state);
        return [...state];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        manageSnacks
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
