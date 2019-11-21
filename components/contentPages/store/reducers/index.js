import {combineReducers} from 'redux';
import page from './page.reducer';
import pageBlock from './pageBlock.reducer';

const reducer = combineReducers({
    page,
    pageBlock
});

export default reducer;