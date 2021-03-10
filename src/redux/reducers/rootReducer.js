
import {combineReducers} from 'redux';

import { contacts } from './GetConactReducer'


const rootReducer = combineReducers({
    contacts : contacts,

})

export default rootReducer;
