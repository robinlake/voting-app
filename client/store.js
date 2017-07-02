import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// import the root reducer

import rootReducer from './reducers/index';

// create an object for the default data
// const defaultState = {
// }

const store = createStore(rootReducer);

//export const history = syncHistoryWithStore(browserHistory, store);
export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;