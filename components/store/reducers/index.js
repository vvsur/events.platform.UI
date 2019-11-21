import {combineReducers} from 'redux';
import baseApp from './baseApp';
//import auth from 'app/auth/store/reducers';

const createReducer = (asyncReducers) =>
    combineReducers(Object.assign({
        //auth,
        baseApp,
        ...asyncReducers
    }));

export default createReducer;
