import { SET_VIDEO, TOGGLE_IS_CURRENT_VIDEOFETCHING_STATE, SET_COMMENTS , TOGGLE_IS_COMMENT_FETCHING_STATE} from '../actionTypes'

const initialState = {
    video: null,
    iscurrentvideFetching: false,
    iscommentfetching: false,
    comments:null
}

const currentvideoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_VIDEO: return { ...state, video: payload }
        case TOGGLE_IS_CURRENT_VIDEOFETCHING_STATE: return { ...state, iscurrentvideFetching: !state.iscurrentvideFetching }
        case TOGGLE_IS_COMMENT_FETCHING_STATE: return { ...state, iscommentfetching: !state.iscommentfetching }
        case SET_COMMENTS: return { ...state, comments: payload }
        default: return state
    }
}

export default currentvideoReducer