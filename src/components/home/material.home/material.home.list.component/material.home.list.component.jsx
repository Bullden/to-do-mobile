import React from "react";
import './material.home.list.component.css'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from "react-redux";

import ListItemText from "@material-ui/core/ListItemText";


export class SimpleList extends React.Component {
  state ={
    arr: []
  }
  // const [state, setState] = React.useState({
    
  // });
  // const handleChange = name => event => {
  //   // setState({ ...state, [name]: event.target.checked });

    
  // };
  componentDidMount() {
    
   this.setState({
     arr: this.props.addTask
   })
    
  }
  render() {
    // if(this.props.change) {
    //   this.componentDidMount()
    // }
    console.log('render');
    console.log(this.props.addTask);
    const a = this.props.addTask
    
    return (
      <div className='task-wrapper'>
  
        <List
          className='list-wrapper'
          component="nav"
          aria-label="main mailbox folders"
        >
          {this.props.addTask.map((item) => (
            <div>
              <Checkbox
                // checked={state.checkedA}
                // onChange={handleChange(item.id)}
                // value={item.id}
                inputProps={{
                  'aria-label': 'primary checkbox',
                }}
              />
              <ListItem button className='list-item'>
                <div className = 'wrap-name-task-id'>
                  <div>
                    <ListItemText primary={item.nameTask} />
                  </div>
                  <div className='wrap-color-list'>
                    <div  className='color-list' style= {{background: item.list.background}} />
                  </div>
                </div>
                
              </ListItem>
            </div>
          ))}
        </List>
      </div>
    );
  }
}
const mapStateToProps = function(state) {
  return{
    addTask: state.homePage.addTask,
    initToDo: state.homePage.initToDo,
    change: state.homePage.change
  }
}
export default connect(mapStateToProps)(SimpleList)