import { combineReducers } from 'redux';

import home from './homeReducers';
import input from './InputAutoCompleteReducers';

export default combineReducers({
    home, input
})
