import { put, takeEvery, call, select } from "redux-saga/effects";
import { callApiSignIn } from "../../services/api";
import { RootState } from "../rootReducer";

export function* signIn() {
    yield takeEvery(`SIGN_IN`, function* (action) {

        // const answerApi = yield call('https://accounts.google.com/o/oauth2/v2/auth?client_id=773877304496-uji9omlknkfhqjagrqvt3kda2sq1govf.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/gmail.send&redirect_uri=http://localhost&access_type=offline')
        const answerApi = yield call(callApiSignIn,'GET','client_id=773877304496-kagp9hp95ffvgd6v0od1p1hq4t9psss3.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/gmail.send&redirect_uri=http://localhost:3002&access_type=online')
        console.log('vcxvxcv',answerApi);

        const person = answerApi
        yield put({
            type: `SIGN_ON`,
            payload: {
                data: person,
            }
        });
    });
}