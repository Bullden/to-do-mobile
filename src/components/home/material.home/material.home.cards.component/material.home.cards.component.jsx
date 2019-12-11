import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { white } from 'material-ui/styles/colors';
import { connect } from "react-redux";
import './material.home.cards.component.css'
import { doEditList } from '../../../../redux/home/actions';

export class CardsComponent extends React.Component {
  randomColor = require('randomcolor')
  color = this.randomColor()  
  // arrayOfCards = [
  //     {
  //       title: 'First card',
  //       countTasks: 3,  
  //       background: this.color
  //     },
  //     {
  //       title: 'Second card',
  //       countTasks: 1,  
  //       background: this.color
  //     },
  //     {
  //       title: 'Thirth card',
  //       countTasks: 4,  
  //       background: this.color
  //     },
  //     {
  //       title: 'Fourth card',
  //       countTasks: 2,  
  //       background: this.color
  //     },
  // ]
  handleOpenList(item) {
    const {doEditList} = this.props
    doEditList({
      editList: item
    })
  }
  componentDidMount() {

  }
  render() {
    const arrayOfList = this.props.addList
    const arrayOfTask = this.props.addTask
    return (
        <div>
            {arrayOfTask.map((item) =>( item.list && item.list.nameList ? 
                <Card className='cards-wrap' onClick ={() => this.handleOpenList(item)} style ={{background: item.list.background}}>
                    <CardContent className ="typography-wrap">
                        <Typography className ='title'>{item.list.nameList}</Typography>
                        <Typography className ='count-tasks'>{item.countList} Task(s)</Typography>
                    </CardContent>
                </Card> : null
            ))}
        </div>
    );

  }
}
const mapStateToProps = function(state) {
  return{
    addList: state.homePage.addList,
    addTask: state.homePage.addTask,
    selectList: state.homePage.selectList,
    initToDo: state.homePage.initToDo
  }
}
export default connect(mapStateToProps,{doEditList})(CardsComponent)