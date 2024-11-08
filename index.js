
const redux = require('redux')
// middleware
const reduxLogger = require("redux-logger")  
const createStore = redux.createStore

const combineReducers = redux.combineReducers   // combining reducer method

  const applyMiddleware = redux.applyMiddleware                                              

const logger = reduxLogger.createLogger() // for middleware


// creating an action
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM ="BUY_ICECREAM"

function buyCake(){
    return {
    type: BUY_CAKE,
    info: "First  redux action"
    }
}
function buyIcecream(){
    return {
    type: BUY_ICECREAM
   
    }
}

//Reducer 
// to write a reducer function we need to items 

// (prevState, action) => newState

// const initialState  = {
//     numOfCake:10,
//     numOfIcecream:20

// }
const cakeInitalState = {
    numOfCake: 10
}

const icecreamInitalState = {
    numOfIcecream:20
}


const cakeReducer = (state = cakeInitalState, action) =>{
    switch (action.type) {
        case BUY_CAKE:return {
            ...state,
            numOfCake: state.numOfCake-1
        }
    
        default: return  state
    }
}
const icecreamReducer = (state = icecreamInitalState, action) =>{
    switch (action.type) {
        case BUY_ICECREAM:return {
            ...state,
            numOfIcecream: state.numOfIcecream-1
        }
    
        default: return  state
    }
}


// store
const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer                        // combing the 2 reduce with rootreducer in store  
})
const store = createStore(rootReducer, applyMiddleware(logger))

console.log('Initial State', store.getState());
const unSubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unSubscribe()




