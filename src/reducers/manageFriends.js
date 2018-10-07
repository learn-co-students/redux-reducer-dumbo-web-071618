export function manageFriends(state, action){
	let stateCopy = Object.assign({}, state)
	switch (action.type) {
		case "ADD_FRIEND":
			return {friends: [...state.friends, action.friend]}
		case "REMOVE_FRIEND":
			console.log('state:',state)
			console.log('action:', action)
			return {
				friends: state.friends.filter(f => f.id != action.id) 
			}
		default:
			return state
	}
}
