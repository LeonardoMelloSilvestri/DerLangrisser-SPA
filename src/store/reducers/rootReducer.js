import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer'

const initState = {

}

const rootReducer = combineReducers({
  character: charactersReducer
})

export default rootReducer;