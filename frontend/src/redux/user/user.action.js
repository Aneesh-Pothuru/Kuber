import { UserActionTypes } from './user.types';


export const setUser = users => ({
    type: UserActionTypes.SET_USER,
    payload: users
})