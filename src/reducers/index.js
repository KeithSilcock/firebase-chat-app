import { combineReducers } from "redux";
import chatReducer from "./chat_reducer";
import inputReducer from "./input_reducer";
import user_reducer from "./user_reducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  input: inputReducer,
  user: user_reducer
});

export default rootReducer;
