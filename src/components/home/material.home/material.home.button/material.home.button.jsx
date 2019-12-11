import React from 'react';
import './material.home.button.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Popover from '@material-ui/core/Popover';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import ViewListIcon from '@material-ui/icons/ViewList';
import { connect } from "react-redux";
import {openTask} from "../../../../redux/home/actions"
import {openList} from "../../../../redux/home/actions"
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';



export function AddButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openTask = () => {
    const {openTask} = props
    
    openTask({
      openTask: true
    })
    setAnchorEl(null);
  }
  const openList = () => {
    const {openList} = props
    
    openList({
      openList: true,
    })
    setAnchorEl(null);
    
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div>
      <Fab color="secondary" aria-label="add" className="add-button" onClick={handleClick}>
        <AddIcon />
      </Fab>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <div className='popup-wrap'>
          <Link to ='/add-task' className='link'>
            <div className ='typo-task typo' onClick={openTask}>
              <div><SpellcheckIcon/></div>
              <div>Task</div>
            </div>
          </Link>
          <div className='typo' onClick ={openList}>
            <div><ViewListIcon/></div>
            <div>List</div>
          </div>
        </div>
      </Popover>
    </div>
  );
}
const mapStateToProps = function(state) {
  return{
    openTask: state.homePage.openTask,
    openList: state.homePage.openList
  }
}
export default connect(mapStateToProps,{openTask,openList})(AddButton)
