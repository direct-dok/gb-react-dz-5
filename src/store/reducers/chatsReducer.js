import defaultState from '../initialState'

const chatsReducer = (state = defaultState.chats, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {...state, count: state.count + action.payload}
      case "DECREMENT":
        return {...state, count: state.count - action.payload}
      default: 
        return state
    }
}

export {chatsReducer}