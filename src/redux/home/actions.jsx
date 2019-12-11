export const INIT_TODO = "INIT_TODO"
export const TODO = "TODO"
export const OPEN_TASK = "OPEN_TASK"
export const OPEN_LIST = "OPEN_LIST"
export const ADD_LIST = "ADD_LIST"
export const ADDED_LIST = "ADDED_LIST"
export const ADD_TASK = "ADD_TASK"
export const SHOW_LISTS = "SHOW_LISTS"
export const SELECT_LIST = "SELECT_LIST"
export const EDIT_LIST = "EDIT_LIST"
export const CHANGE_LIST_NAME = "CHANGE_LIST_NAME"
export const GET_LIST = "GET_LIST"
export const GET_LISTS = "GET_LISTS"
export const POST_TASK = "POST_TASK"
export const PUT_LIST = "PUT_LIST"

export function putList(data) {
    return {type: PUT_LIST, data}
}
export function doInitToDo(data) {
    return {type: INIT_TODO, data}
}
export function toDo(data) {
    return {type: TODO, data}
}
export function openTask(data) {
    return {type: OPEN_TASK, data}
}
export function openList(data) {
    return {type: OPEN_LIST, data}
}
export function addedList(data) {
    return {type: ADDED_LIST, data}
}
export function addList(data) {
    return {type: ADD_LIST, data}
}
export function addTask(data) {
    return {type: ADD_TASK, data}
}
export function postTask(data) {
    return {type: POST_TASK, data}
}
export function showLists(data) {
    return {type: SHOW_LISTS, data}
}
export function doSelectList(data) {
    return {type: SELECT_LIST, data}
}
export function doEditList(data) {
    return {type: EDIT_LIST, data}
}
export function doChangeNameList(data) {
    return {type: CHANGE_LIST_NAME, data}
}
export function getList(data) {
    return {type: GET_LIST, data}
}
export function getLists(data) {
    return {type: GET_LISTS, data}
}