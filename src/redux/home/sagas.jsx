import { put, takeEvery, call, select } from "redux-saga/effects";
import { callApi } from "../../services/api";
import { RootState } from "../rootReducer";

export function* doInitToDo() {
    yield takeEvery(`INIT_TODO`, function* (action) {
        const answerApi = yield call(callApi, "GET", "tasks");


        const person = answerApi
        yield put({
            type: `TODO`,
            payload: {
                data: person.data.data,
            }
        });
    });
}

export function* addList() {
    yield takeEvery(`ADD_LIST`, function* (action) {

        
        const answerApi = yield call(callApi, 'POST', 'lists', action.data)

        
    })
}

export function* getList() {
    yield takeEvery(`GET_LIST`, function* (action) {
        
        const answerApi = yield call(callApi, "GET", "lists")

        yield put({
            type:`GET_LISTS`,
            data:  answerApi.data.data
        })
    })
}

export function* postTask() {
     yield takeEvery(`ADD_TASK`,function* (action) {

         console.log(action);
         
         const answerApi = yield call(callApi, "POST", "tasks", action.data)
         console.log(answerApi);
         
     })
}

export function* putList() {
    yield takeEvery(`PUT_LIST`,function* (action) {

        console.log(action);
        const itemForChange = yield select(
            (state) => state.homePage.editList
          );
          console.log(itemForChange);
          
        const answerApi = yield call(callApi, "PUT", `tasks/${itemForChange._id}`, action.data.editList)
        console.log(answerApi);

        const answerApii = yield call(callApi, "PUT", `lists/${itemForChange.list._id}`, action.data.editList.list)
        console.log(answerApii);
    })
}