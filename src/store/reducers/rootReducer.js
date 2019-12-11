import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer'
import itemsReducer from './itemsReducer'

const rootReducer = combineReducers({
  character: charactersReducer,
  item: itemsReducer
})

export default rootReducer;