import {SIGN_IN, SIGN_ON} from './actions'

export const initialState = {
    signIn: false
}

export function authReducer (
    state = initialState,
    action
) {
    switch(action.type) {
        
        case SIGN_IN: {
            console.log(action.data);
            return {
                signIn:action.data.signIn
            }
        }
        case SIGN_ON : {
            return{
                s: action
            }
        }
        default:
            return state
    }
}

export const authPage = (state) => state.AuthPage