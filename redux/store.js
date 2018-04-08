import { createStore } from 'redux';

const initialState = {
    react: 0,
    vue: 0,
    angular: 0,
    nodejs: 0,
    meteor: 0,
    ember: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "VOTE":
            switch (action.payload.jsNumber){
                case 1:
                    state.react += 1;
                    break;
                case 2:
                state.vue += 1;
                    break;
                case 3:
                state.angular += 1;
                    break;
                case 4:
                state.nodejs += 1;
                    break;
                case 5:
                state.meteor += 1;
                    break;
                case 6:
                state.ember += 1;
                    break;
            }
            console.log(action.payload);
        break;
        case "UNVOTE":

        break;
    }
    return state;
}

const store = createStore(reducer);

// After Store Updated Execute.
store.subscribe(() => {
    console.log('Store Updated : ', store.getState().react);
})

// store.dispatch({
//     type: 'VOTE',
//     value: 11
// })

export default store;