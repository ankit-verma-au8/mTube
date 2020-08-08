import { SET_VIDEO, TOGGLE_IS_CURRENT_VIDEOFETCHING_STATE , SET_COMMENTS , TOGGLE_IS_COMMENT_FETCHING_STATE} from '../actionTypes'
import keys from '../../config'
import axios from 'axios'

export const fetchcurrentVideo = (videoID) => async dispatch => {

    try {
        dispatch({ type: TOGGLE_IS_CURRENT_VIDEOFETCHING_STATE })
        const  {data}  = await axios(`${keys.BASE_URL}/videos?part=snippet,contentDetails,statistics&key=${keys.API_KEY}&id=${videoID}`)
        console.log(data)
        dispatch({ type: SET_VIDEO, payload: data })
    }
    catch (err) {
        console.error(err)
    }
    finally {
        dispatch({ type: TOGGLE_IS_CURRENT_VIDEOFETCHING_STATE })
    }
}

export const fetchComments = (videoID) => async dispatch => {
    try {
        console.log("I am inside fetchcomment action")

        dispatch({ type: TOGGLE_IS_COMMENT_FETCHING_STATE })
        const  {data}  = await axios(`${keys.BASE_URL}/commentThreads?part=snippet,replies&key=${keys.API_KEY}&videoId=${videoID}`)
        console.log(data)
        dispatch({ type: SET_COMMENTS, payload: data })
    }
    catch (err) {
        console.error(err)
    }
    finally {
        dispatch({ type: TOGGLE_IS_COMMENT_FETCHING_STATE })
    }
}