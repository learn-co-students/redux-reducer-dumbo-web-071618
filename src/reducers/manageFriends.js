export function manageFriends(state={friends: []}, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend] }
      // in the code above i spread into state, i go into the key of friends specifically which is an array
      // then i spread into the state of friends and i add a friend to that state.
    case 'REMOVE_FRIEND':
    const friendIndex = state.friends.findIndex(friend => friend.id === action.id)
      return ({
        ...state,
        friends: [...state.friends.slice(0, friendIndex), ...state.friends.slice(friendIndex+1)]
      })
      // in the code above we're trying to remove a friend to do this i put an empty object in my ()
      // i'll spread into state specifically the key of friends first i getting everything before the friend i don't
      // want to include next i'll concatnate it with  everything after the friend i don't want to include 
        default:
      return state;
  }
}
