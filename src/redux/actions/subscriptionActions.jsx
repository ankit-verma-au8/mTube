import keys from "../../config";
import axios from "axios";
import {
  TOGGLE_ISSUBSCRIPTIONS_FETCHING_STATE,
  SET_SUBSCRIPTIONS,
} from "../actionTypes";

export const fetchSubscriptions = () => async (dispatch, getstate) => {
  const accessToken = getstate().userState.user.access_token;
  try {
    console.log(accessToken);
    dispatch({ type: TOGGLE_ISSUBSCRIPTIONS_FETCHING_STATE });
    const { data } = await axios(
      `${keys.BASE_URL}/subscriptions?part=snippet,contentDetails&mine=true&key=${keys.API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      }
    );
    console.log(data);
    dispatch({ type: SET_SUBSCRIPTIONS, payload: data });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ type: TOGGLE_ISSUBSCRIPTIONS_FETCHING_STATE });
  }
};
