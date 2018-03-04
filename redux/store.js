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
                    console.log('react')
                    break;
                case 2:
                console.log('vue')
                   
                    break;
                case 3:
                console.log('angular')
                   
                    break;
                case 4:
                console.log('nodejs')
                   
                    break;
                case 5:
                console.log('meteor')
                    
                    break;
                case 6:
                console.log('ember')
                  
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