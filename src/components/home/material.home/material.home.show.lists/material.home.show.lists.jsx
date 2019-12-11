import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { white } from 'material-ui/styles/colors';
import { connect } from "react-redux";
import {showLists, doSelectList} from "../../../../redux/home/actions"

export function ShowLists(props) {
    const show = props.showListss

    const selectList = (nameList) => {

        const {doSelectList} = props

        
        doSelectList({
            selectList: nameList
        })
        const {showLists} = props
        showLists({
            showListss: false
        })
    }
    return(show ?
        <div>
             {props.addList.map((item) =>(
              <Card className='cards-wrap' onClick ={() => selectList(item)} style ={{background: item.background}}>
                  <CardContent className ="typography-wrap">
                      <Typography className ='title'>{item.nameList}</Typography>
                  </CardContent>
              </Card>
          ))}
            
        </div> : null
    )
}
const mapStateToProps = function(state) {
    return{
      showListss: state.homePage.showLists,
      addList: state.homePage.addList,
      selectList: state.homePage.selectList
    }
  }
export default connect(mapStateToProps,{showLists , doSelectList})(ShowLists)
