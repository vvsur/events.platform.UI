import { combineReducers } from 'redux'
import formReducer from './test.reducer'
import eventsReducer from './events.reducer'
import pageReducer from './page.reducer'


const reducer = combineReducers({
  formReducer,
  eventsReducer,
  pageReducer
})

export default reducer;