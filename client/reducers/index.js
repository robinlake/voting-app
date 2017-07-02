import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import logIn from './logIn';
import changeSampleData from './changeSampleData';

const rootReducer = combineReducers({logIn, changeSampleData, routing });

export default rootReducer;