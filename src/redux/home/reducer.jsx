import { OPEN_TASK, SHOW_LISTS, SELECT_LIST, ADD_TASK, EDIT_LIST, PUT_LIST, CHANGE_LIST_NAME, INIT_TODO, ADDED_LIST } from './actions'
import { OPEN_LIST,TODO } from './actions'
import { ADD_LIST, GET_LISTS, POST_TASK } from './actions'

export const initialState = {
    initToDo: [],
    openTask: false,
    openList: false,
    addList: [],
    addTask: [],
    showLists: false,
    selectList: { nameList: 'Select list' },
    editList:{},
    change:false
}


export function homeReducer(
    state = initialState,
    action
) {
    switch (action.type) {

        // case INIT_TODO: {
        //     console.log(action.payload);
        //     return {
        //         ...state,
        //         initToDo: action
        //     }
        // }
        case TODO: {
            console.log(action.payload.data);
            let array = action.payload.data
            // var arr = action.payload.data
            var arr = []
            var result = {};
            for(let i = 0; i < array.length; i++){
                let a = array[i]
                let sameNameList = arr.find((item) => { return item.list._id === a.list._id })
                if(sameNameList) {
                    arr.forEach((item) => {
                        if(item.list._id === a.list._id) {
                           item.countList ++                         
                        }                 
                    })
                    let newArr = {
                        nameTask: a.nameTask,
                        list: {
                            _id: a.list._id,
                            background: a.list.background
                        },
                        date: a.date
                    }
                    arr.push(newArr)
                } else {
                    arr.push(a)
                }
                
                
                
                
                
                // let sameNameList = arr.find((item) => { return item.list._id === array[i].list._id })
                // console.log(sameNameList);
                // if(sameNameList) {
                //     arr.forEach((element) => {
                //         if(element.list._id === array[i].list._id){
                //             element.countList = 1
                //         }
                //     })
                // }
                // console.log(arr);
                
                // arr.forEach((item) => {
                    
                // })
                
            }
            console.log('arr',arr);
     
            

            // array.forEach((item,index,arra) => {
            //     arr.forEach((i) => {
            //         if(item.list._id === i.list._id) {
            //             item.countList ++                       
            //         }              
            //     })
            //     // for( let j = 0; j < array.length; j++) {
            //     //     let a = arr[j];
            //     //     // console.log(arr[j].list._id);
            //     //     // console.log(arr[j+1].list._id);        
            //     //     if(array[j].list._id === array[j+1].list._id){
            //     //         console.log(array[j]);
            //     //         array[j].countList =   
            //     //         console.log(array[j]);
                                                
            //     //     }else console.log(44);                                     
            //     // }
            // })
            // arr.forEach(function(a){
            //     result[a] = result[a] + 1 || 1;
            // });
            // console.log(result);
            
            // for(let key in result) {
            //     console.log(key + ':' + result[key]);    
            // }
            // array.forEach((item , index) => {
            //     for(let key in result){
            //         if(key === item.list._id) {
            //             console.log('TRUE');
            //             item.countList = result[key]
            //         }
            //     }
            // })
     
            return {
                ...state,
               addTask: arr,
               initToDo: array
            }
        }
        case OPEN_TASK: {

            return {
                ...state,
                openTask: action.data.openTask
            }
        }
        case PUT_LIST: {

            const arrayTasks = state.addTask
            const editList = action.data.editList

            const same = arrayTasks.find((item) => {return item._id === editList._id})
            if(same) {
                arrayTasks.forEach((item) => {
                    if(item._id === editList._id) {
                        item.list.nameList = editList.list.nameList
                        
                    }
                })
                
            }

            console.log(arrayTasks);
            
            return {
                ...state,
                change: action.data.change,
                addTask: arrayTasks,
                editList: action.data.editList
            }
        }
        case OPEN_LIST: {
            return {
                ...state,
                openList: action.data.openList
            }
        }
        case GET_LISTS: {

            
            return {
                ...state,
                addList: action.data
            }
        }

        case ADD_LIST: {

            
            // let arrayOfLists = state
            // arrayOfLists.addList.push(action.data)
            return {
                ...state,
                addList: action.data
            }
        }
        // case POST_TASK: {         
        //     return {
        //         ...state,
        //         addList: action.data
        //     }
        // }
        case ADD_TASK: {
            let arrayOfTasks = state
            let sameNameList = arrayOfTasks.addTask.find((item) => { return item.list._id === action.data.list._id })
            if (sameNameList) {
                arrayOfTasks.addTask.forEach((item) => {
                    if (item.list._id === action.data.list._id) {
                        item.countList++
                    }
                })
                let newArr = {
                    nameTask: action.data.nameTask,
                    list: {
                        _id: action.data.list._id
                    },
                    date: action.data.date
                }
                arrayOfTasks.addTask.push(newArr)
            } else {
                arrayOfTasks.addTask.push(action.data)
            }

            return {
                ...state,
                addTask: arrayOfTasks.addTask
            }
        }
        case SHOW_LISTS: {
            return {
                ...state,
                showLists: action.data.showLists
            }
        }
        case SELECT_LIST: {
            return {
                ...state,
                selectList: action.data.selectList
            }
        }
        case EDIT_LIST: {
            
            
            return {
                ...state,
                editList: action.data.editList
            }
        }
        case CHANGE_LIST_NAME: {

            
            return {
                ...state,
                editList: action.data.editList
            }
        }
        default:
            return state
    }
}
export const homePage = (state) => state.HomePage