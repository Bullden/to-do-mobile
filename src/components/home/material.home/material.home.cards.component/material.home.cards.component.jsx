import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { white } from 'material-ui/styles/colors';
import './material.home.cards.component.css'

export default function CardsComponent() {
  var randomColor = require('randomcolor')
  var color = randomColor()  
  const arrayOfCards = [
      {
        title: 'First card',
        countTasks: 3,  
        background: color
      },
      {
        title: 'Second card',
        countTasks: 1,  
        background: color
      },
      {
        title: 'Thirth card',
        countTasks: 4,  
        background: color
      },
      {
        title: 'Fourth card',
        countTasks: 2,  
        background: color
      },
  ]
  return (
      <div>
          {arrayOfCards.map((item) =>(
              <Card className='cards-wrap' style = {{background: item.background, color:white}}>
                  <CardContent className ="typography-wrap">
                      <Typography className ='title'>{item.title}</Typography>
                      <Typography className ='count-tasks'>{item.countTasks} Task(s)</Typography>
                  </CardContent>
              </Card>
          ))}
      </div>
    //   <Card className= 'card-wrap' style = {{background: color, color: white}}>
    //   {console.log(color)}
    //   <CardContent style={{color: white}}>
    //     <Typography variant="h5" component="h2">List</Typography>
    //     <Typography className={classes.pos} color="white">
    //       count task
    //     </Typography>    
    //   </CardContent>
    // </Card>
  );
}