import keys from "../../config";
import axios from "axios";
import {
  TOGGLE_CHANNEL_DATA_FETCHING_STATE,
  SET_CHANNEL_DATA,
} from "../actionTypes";

export const fetchchannelData = () => async (dispatch, getstate) => {
  const accessToken = getstate().userState.user.access_token;
  try {
    console.log(accessToken);
    dispatch({ type: TOGGLE_CHANNEL_DATA_FETCHING_STATE });
    const { data } = await axios(
      `${keys.BASE_URL}/channels?part=snippet,contentDetails,statistics&mine=true&key=${keys.API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      }
    );
    console.log(data);
    dispatch({ type: SET_CHANNEL_DATA, payload: data });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ type: TOGGLE_CHANNEL_DATA_FETCHING_STATE });
  }
};
