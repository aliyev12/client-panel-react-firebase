let i = 1;

export default function(state, action) {
    switch(action.type) {
        case 'ADD_TODO': {
            const newState = state.slice();
            newState.push({
                id: i++,
                text: action.text
            });
            return newState;
        }
        default:
            return state;
    }
}