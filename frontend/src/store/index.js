import { createStore } from 'redux';

const initialState = {
    classification: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CLASSIFICATION':
            return { ...state, classification: action.payload };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
