import React from 'react';
import { connect } from "react-redux";
import { addTask } from "../../../../redux/home/actions"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './material.home.open.tasks.css'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link } from 'react-router-dom';




export class OpenTaskComponent extends React.Component {
   
    state = {
        nameTask: '',
        selectedDate:'',
        setSelectedDate:''
    }
    cancelTask =() => {
        console.log('cancel');     
    }
    addtask = () => {
        console.log('done', this.state.selectedDate, this.state.nameTask);
        
    }
    handle = (event) => this.setState({ nameTask: event.target.value });
    handleDateChange = event => {
        console.log(event);
        // console.log(this.state.setSelectedDate);
        
        this.setState({
            selectedDate: event
        });
    };
    componentDidMount () {
        console.log(this.props);
        console.log('list fo list',this.props.addList);
        console.log('list fo listxcvc',this.props.openListt);
    }
    render() {
        
        
        return (
            <div className='wrap-add-task'>
                <div className='buttons-wrap'>
                    <div>
                        <Link to = '/'>
                            <Button className="button-task-cancel" color="primary" onClick={() => this.cancelTask()}>Cancel</Button>
                        </Link>
                    </div>
                    <div>
                        <Button className="button-task-done" color="primary" onClick={() => this.addtask()}>Done</Button>
                    </div>
                </div>
                <div className='input-task-wrap'>
                    <div>
                        <form noValidate autoComplete="off" className="form-task-add">
                            <TextField className="form" label="Name task" value={this.state.nameTask} onChange={this.handle} />
                        </form>
                    </div>
                </div>
                <div className ="wrap-cal-sel">
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
                    <div className='select-wrap'><div>Select list</div></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(state) {
    return{
      addList: state.homePage.addList
    }
  }
export default connect(mapStateToProps,{addTask})(OpenTaskComponent)