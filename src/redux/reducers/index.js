import { combineReducers } from "redux";
import courses from "./courseReducer";
import apiCallsInProgress from "./apiStatusReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
});

export default rootReducer;
