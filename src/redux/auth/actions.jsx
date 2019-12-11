export const SIGN_IN = "SIGN_IN"
export const SIGN_ON = "SIGN_ON"

export function signIn(data) {
    return {type: SIGN_IN, data}
}
export function signOn(data) {
    return {type: SIGN_ON, data}
}