/****************************************************************************
**
**
**
**
****************************************************************************/
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import { default as ReduxThunk, thunk } from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
