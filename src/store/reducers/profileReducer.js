import defaultState from '../initialState'

const profileReducer = (state = defaultState.profile, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {...state, count: state.count + action.payload}
      case "DECREMENT":
        return {...state, count: state.count - action.payload}
      default: 
        return state
    }
}

export {profileReducer}