import {
  SET_CHANNEL_DATA,
  TOGGLE_CHANNEL_DATA_FETCHING_STATE,
} from "../actionTypes";

const initialState = {
  channelData: null,
  ischannelDataFetchingstate: false,
};

const mychannelReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CHANNEL_DATA:
      return { ...state, channelData: payload };
    case TOGGLE_CHANNEL_DATA_FETCHING_STATE:
      return {
        ...state,
        ischannelDataFetchingstate: !state.ischannelDataFetchingstate,
      };
    default:
      return state;
  }
};

export default mychannelReducer;
