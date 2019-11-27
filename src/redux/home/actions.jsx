export const OPEN_TASK = "OPEN_TASK"
export const OPEN_LIST = "OPEN_LIST"
export const ADD_LIST = "ADD_LIST"

export function openTask(data) {
    return {type: OPEN_TASK, data}
}
export function openList(data) {
    return {type: OPEN_LIST, data}
}
export function addList(data) {
    return {type: ADD_LIST, data}
}