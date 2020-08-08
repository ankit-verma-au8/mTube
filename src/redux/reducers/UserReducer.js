import {
  SET_USER,
  TOGGLE_ISUSERFETCHING_STATE,
  LOGOUT_USER,
  SET_SUBSCRIPTIONS,
  TOGGLE_ISSUBSCRIPTIONS_FETCHING_STATE,
} from "../actionTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  mySubscriptions: null,
  isSubscriptionsFetching: false,
  isuserFetching: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      const userJSON = JSON.stringify(payload);
      localStorage.setItem("user", userJSON);
      return { ...state, user: payload };
    case SET_SUBSCRIPTIONS:
      return { ...state, mySubscriptions: payload };
    case TOGGLE_ISUSERFETCHING_STATE:
      return { ...state, isuserFetching: !state.isuserFetching };
    case TOGGLE_ISSUBSCRIPTIONS_FETCHING_STATE:
      return {
        ...state,
        isSubscriptionsFetching: !state.isSubscriptionsFetching,
      };
    case LOGOUT_USER:
      localStorage.removeItem("user");
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;
