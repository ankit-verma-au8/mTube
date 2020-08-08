import { SET_VIDEOS, TOGGLE_ISVIDEOFETCHING_STATE } from "../actionTypes";
import keys from "../../config";
import axios from "axios";

export const fetchTrendingVideos = (pageToken = "") => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_ISVIDEOFETCHING_STATE });
    dispatch({ type: SET_VIDEOS, payload: null });
    const { data } = await axios(
      `${keys.BASE_URL}/videos?part=snippet&key=${
        keys.API_KEY
      }&regionCode=IN&chart=mostPopular&maxResults=20${
        pageToken.length !== 0 ? "&pageToken=" + pageToken : ""
      }`
    );
    console.log(data);
    dispatch({ type: SET_VIDEOS, payload: data });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ type: TOGGLE_ISVIDEOFETCHING_STATE });
  }
};

export const fetchSearchVideos = (searchquery, pageToken = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: TOGGLE_ISVIDEOFETCHING_STATE });
    dispatch({ type: SET_VIDEOS, payload: null });

    const { data } = await axios(
      `${keys.BASE_URL}/search?part=snippet&key=${
        keys.API_KEY
      }&regionCode=IN&chart=mostPopular&maxResults=20${
        pageToken.length !== 0 ? "&pageToken=" + pageToken : ""
      }&q=${searchquery}`
    );
    console.log(data);
    dispatch({ type: SET_VIDEOS, payload: data });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ type: TOGGLE_ISVIDEOFETCHING_STATE });
  }
};
