import {
  SET_PLAYLISTS,
  TOGGLE_ISPLAYLIST_FETCHING_STATE,
  CREATE_PLAYLISTS,
  TOGGLE_ISPLAYLIST_CREATING_STATE,
} from "../actionTypes";

const initialState = {
  playlists: null,
  isplaylistFetching: false,
  isplayListCreating: false,
};

const playListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PLAYLISTS:
      return { ...state, playlists: payload };
    case TOGGLE_ISPLAYLIST_FETCHING_STATE:
      return { ...state, isplaylistFetching: !state.isplaylistFetching };
    case CREATE_PLAYLISTS:
      return {
        ...state,
        playlists: {
          ...state.playlists,
          items: [...state.playlists.items, payload],
        },
      };
    case TOGGLE_ISPLAYLIST_CREATING_STATE:
      return { ...state, isplayListCreating: !state.isplayListCreating };

    default:
      return state;
  }
};

export default playListReducer;
