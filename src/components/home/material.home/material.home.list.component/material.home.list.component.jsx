import React from "react";
import './material.home.list.component.css'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from '@material-ui/core/Checkbox';

import ListItemText from "@material-ui/core/ListItemText";


export default function SimpleList() {
  const arrayOfTasks = [
    {
      title: 'First task',
      id:7
    },
    {
      title: 'Second task',
      id:6
    },
    {
      title: 'Third task',
      id:5
    },
    {
      title: 'Fourth task',
      id:4
    },
    {
      title: 'Fifth task',
      id:3
    }
  ]
  // const [state, setState] = React.useState({
    
  // });
  const handleChange = name => event => {
    // setState({ ...state, [name]: event.target.checked });
    console.log('list id: ',name);
    
  };
  return (
    <div className='task-wrapper'>

      <List
        className='list-wrapper'
        component="nav"
        aria-label="main mailbox folders"
      >
        {arrayOfTasks.map((item) => (
          <div>
            <Checkbox
              // checked={state.checkedA}
              onChange={handleChange(item.id)}
              value={item.id}
              inputProps={{
                'aria-label': 'primary checkbox',
              }}
            />
            <ListItem button className='list-item'>
              <ListItemText primary={item.title} />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
}
