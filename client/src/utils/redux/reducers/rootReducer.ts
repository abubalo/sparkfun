import { combineReducers } from "redux";
import authenticationReducer from "./authenticationSlice";
import bookingReducer from "./bookingReducer";
import gigIdReducer from "./gigIdSlice";
import userReducer from "./userReducer";

const rootReducers = combineReducers({
  user: userReducer,
  booking: bookingReducer,
  getGigId: gigIdReducer,
  authentication: authenticationReducer,
});

export default rootReducers;
