import { SET_VIDEOS, TOGGLE_ISVIDEOFETCHING_STATE } from '../actionTypes'

const initialState = {
    videos: null,
    isvideFetching: false
}

const videoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_VIDEOS: return { ...state, videos: payload }
        case TOGGLE_ISVIDEOFETCHING_STATE: return { ...state, isvideFetching: !state.isvideFetching }
        default: return state
    }
}

export default videoReducer