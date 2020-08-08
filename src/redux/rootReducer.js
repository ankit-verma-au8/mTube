import { combineReducers } from "redux";
import userReducer from "./reducers/UserReducer";
import videoReducer from "./reducers/VideoReducer";
import currentvideoReducer from "./reducers/CurrentVideoreducer";
import playListReducer from "./reducers/playListReducer";
import mychannelReducer from "./reducers/Mychannelreducer";

const rootReducer = combineReducers({
  userState: userReducer,
  videoState: videoReducer,
  currentvideoState: currentvideoReducer,
  playListState: playListReducer,
  channelState: mychannelReducer,
});

export default rootReducer;
