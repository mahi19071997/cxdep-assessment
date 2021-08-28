import {appReducer} from "./appRedux/reducer"
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    app:appReducer
})

const myAsyncMiddleware = (store) => (next) => (actions) => {
    if (typeof actions == "function") {
        return actions(store.dispatch)
    }
    return next(actions)
}

export const store = createStore(rootReducer, compose(  applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
