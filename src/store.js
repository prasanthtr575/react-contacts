import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import contacts from "./reducers/contactReducer";

export default createStore(
    combineReducers({
        contacts
    }),
    {},
    applyMiddleware(createLogger())
);