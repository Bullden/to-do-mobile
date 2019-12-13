import React from 'react';
import { connect } from "react-redux";
import { showLists, addTask , getList, postTask} from "../../../../redux/home/actions"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './material.home.open.tasks.css'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Redirect } from "react-router";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link } from 'react-router-dom';
import ShowLists from '../material.home.show.lists/material.home.show.lists';




export class OpenTaskComponent extends React.Component {

    state = {
        nameTask: '',
        selectedDate: '',
        setSelectedDate: ''
    }
    cancelTask = () => {
        console.log('cancel');
    }
    addtask = () => {
        console.log(this.state.selectedDate);
        if(this.state.selectedDate && this.state.nameTask && this.props.selectList){
            const { addTask } = this.props
            addTask({
                nameTask: this.state.nameTask,
                date: this.state.selectedDate,
                list: this.props.selectList,
                countList: 1
            })
        } else return
        // const arrayToPost = this.props.addTaskk.slice(-1)[0]
        // const {postTask} = this.props
        // postTask({
        //     arrayToPost
        // })
    }
    handle = (event) => this.setState({ nameTask: event.target.value });
    handleDateChange = event => {
        // console.log(this.state.setSelectedDate);

        this.setState({
            selectedDate: event
        });
    };
    showLists = () => {
        const { showLists } = this.props
        showLists({
            showLists: true
        })

    }
    forceUpdate() {}
    componentDidMount() {
        const {getList} = this.props
        getList({})
    }
    render() {
       
        // if(this.props.selectList === {} || undefined) {
        //     list = 'Select list'
        // } else {
        //     list = this.props.selectList
        // }    
        const signIn = this.props.signIn
        return ( 
            <div className='wrap-add-task'>
                <div className='buttons-wrap'>
                    <div>
                        <Link to='/'>
                            <Button className="button-task-cancel" color="primary" onClick={() => this.cancelTask()}>Cancel</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/'>
                            <Button className="button-task-done" color="primary" onClick={() => this.addtask()}>Done</Button>
                        </Link>
                    </div>
                </div>
                <div className='input-task-wrap'>
                    <div>
                        <form noValidate autoComplete="off" className="form-task-add">
                            <TextField className="form" label="Name task" value={this.state.nameTask} onChange={this.handle} />
                        </form>
                    </div>
                </div>
                <div className="wrap-cal-sel">
                    <div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={this.state.selectedDate}
                                    onChange={this.handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className='select-wrap' onClick={this.showLists}>
                        <div>{this.props.selectList.nameList}</div>
                        <div  className ='color-select-list'style ={{background: this.props.selectList.background}}></div>
                    </div>
                </div>
                <ShowLists />
            </div> 
        )
    }
}
const mapStateToProps = function (state) {
    return {
        signIn: state.authPage.signIn,
        addList: state.homePage.addList,
        showListss: state.homePage.showLists,
        selectList: state.homePage.selectList,
        addTaskk: state.homePage.addTask,
        change: state.homePage.change
    }
}
export default connect(mapStateToProps, { showLists, addTask ,getList, postTask})(OpenTaskComponent)