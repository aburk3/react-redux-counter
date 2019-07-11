import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            };
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // .push mutates the original results...concat creates new array
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter
                })
            };
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            // .filter returns a new array and takes a fn as input
            const updatedArray = state.results.filter(
                result => result.id !== action.resultElId
            );
            return {
                ...state,
                results: updatedArray
            };
    }

    return state;
};

export default reducer;
