import { INCREMENT, DECREMENT, RESET } from './actions';
const initialState = { count: 0 };
export default function arithmeticOpReducer(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        case RESET:
            return {
                count: 0
            };
        default:
            return state;
    }
    
}