export function manageFriends(state, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return { ...state, friends: [...state.friends, action.friend] }
        case "REMOVE_FRIEND":
            // let remove_index = state.friends.map(friend => friend.id).indexOf(action.id)
            return {...state, friends: state.friends.filter((friend) => friend.id !== action.id)}
        default:
            return state
    }
}
