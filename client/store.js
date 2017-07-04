import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
// import the root reducer
import rootReducer from './reducers/index';

import polls from './data/polls'

//create an object for the default data
const defaultState = {

}

const store = createStore(rootReducer, defaultState);

//export const history = syncHistoryWithStore(browserHistory, store);
export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;