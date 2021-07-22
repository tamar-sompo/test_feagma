import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import tableReducer from './reducers/tableReducer'
//רשימת הרדוסרים
const reducer = combineReducers({
    tableReducer
})
// רשימת הפונקציות שיש בכל המידלוורס
const store = createStore(
    reducer
    // composeWithDevTools(
    //     applyMiddleware(
    //         // composeWithDevTools
    //     ))
)
export default store;
