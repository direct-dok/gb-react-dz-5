import defaultState from '../initialState'
import ADD_USER from '../actions/action_add_user'
import REMOVE_USER from '../actions/action_remove_user'



const userReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_USER:
        return {...state, users: [...state.users, action.payload]} 
      case REMOVE_USER:
        return {...state, users: state.users.filter(user => user.id !== action.payload)}
      default: 
        return state
    }
}

export default userReducer