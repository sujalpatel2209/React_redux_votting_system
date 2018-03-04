import { createStore } from 'redux';

const reducer = (state, action) => {
    switch(action.type){
        case "VOTE":
            state = state + action.value;
        break;
        case "UNVOTE":

        break;
    }
    return state;
}

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log('Store Updated : ', store.getState());
})

store.dispatch({
    type: 'VOTE',
    value: 11
})

export default store;