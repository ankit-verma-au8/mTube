import {
  SET_PLAYLISTS,
  TOGGLE_ISPLAYLIST_FETCHING_STATE,
  TOGGLE_ISPLAYLIST_CREATING_STATE,
  CREATE_PLAYLISTS,
} from "../actionTypes";
import keys from "../../config";
import axios from "axios";

export const fetchPlaylists = () => async (dispatch, getstate) => {
  const accessToken = getstate().userState.user.access_token;
  try {
    console.log(accessToken);
    dispatch({ type: TOGGLE_ISPLAYLIST_FETCHING_STATE });
    dispatch({ type: SET_PLAYLISTS, payload: null });
    const { data } = await axios(
      `${keys.BASE_URL}/playlists?part=snippet&mine=true&key=${keys.API_KEY}&maxResults=20`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      }
    );
    console.log(data);
    dispatch({ type: SET_PLAYLISTS, payload: data });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ type: TOGGLE_ISPLAYLIST_FETCHING_STATE });
  }
};

export const createPlaylist = (title, description, privacystatus) => async (
  dispatch,
  getstate
) => {
  const accessToken = getstate().userState.user.access_token;

  try {
    console.log(accessToken);
    dispatch({ type: TOGGLE_ISPLAYLIST_CREATING_STATE });
    console.log(title, description, privacystatus);
    const { data } = await axios.post(
      `${keys.BASE_URL}/playlists?part=snippet,status&key=${keys.API_KEY}`,
      {
        snippet: {
          title: title,
          description: description,
        },
        status: {
          privacyStatus: privacystatus,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      }
    );
    console.log(data);
    dispatch({ type: CREATE_PLAYLISTS, payload: data });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ type: TOGGLE_ISPLAYLIST_CREATING_STATE });
  }
};
