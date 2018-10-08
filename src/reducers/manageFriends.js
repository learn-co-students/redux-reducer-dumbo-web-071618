export function manageFriends(state, action){
	switch (action.type) {
		case 'ADD_FRIEND':
			return {friends: [...state.friends, action.friend]}
		case 'REMOVE_FRIEND':
			let friends = [...state.friends]
			friends = friends.filter(f => {
				return f.id !== action.id
			})
			return {friends: friends}
		default:
			return state
	}
}
