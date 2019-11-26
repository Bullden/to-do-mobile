import React from 'react';
import './material.home.button.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Popover from '@material-ui/core/Popover';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import ViewListIcon from '@material-ui/icons/ViewList';


export default function AddButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openTask = () => {
    console.log('open task');   
  }
  const openList = () => {
    console.log('open list');
    
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
          <div className ='typo-task typo' onClick={openTask}>
            <div><SpellcheckIcon/></div>
            <div>Task</div>
          </div>
          <div className='typo' onClick ={openList}>
            <div><ViewListIcon/></div>
            <div>List</div>
          </div>
        </div>
      </Popover>

    </div>
  );
}
