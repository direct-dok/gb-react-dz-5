import { combineReducers } from 'redux'
import countReducer from './countReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    count: countReducer, 
    users: userReducer
})

export default rootReducer