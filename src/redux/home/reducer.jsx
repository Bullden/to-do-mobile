import {OPEN_TASK} from './actions'
import {OPEN_LIST} from './actions'
import {ADD_LIST} from './actions'

export const initialState = {
    openTask: false,
    openList: false,
    addList: [],
    addTask: []
} 


export function homeReducer(
    state = initialState,
    action
){
    switch(action.type) {
        
        case OPEN_TASK: {
            console.log(action.data);
            return {
                ...state,
                openTask: action.data.openTask
            }
        }
        case OPEN_LIST: {
            return {
                ...state,
                openList: action.data.openList
            }
        }
        case ADD_LIST: {
            let arrayOfLists = state
            arrayOfLists.addList.push(action.data)
            return {
                ...state,
                addList: arrayOfLists.addList
            }
        }
        default:
            return state
    }
}
export const homePage = (state) => state.HomePage