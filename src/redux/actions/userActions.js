

import { SET_USER, TOGGLE_ISUSERFETCHING_STATE, LOGOUT_USER } from '../actionTypes'

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}
export const toggleUserFetchingState = () => {
    return {
        type: TOGGLE_ISUSERFETCHING_STATE
    }
}

export const logOutUser = () => {
    return {
        type: LOGOUT_USER
    }
}