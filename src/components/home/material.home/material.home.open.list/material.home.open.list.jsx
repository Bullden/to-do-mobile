import React from 'react'
import './material.home.open.list.css'
import { connect } from "react-redux";
import {openList} from "../../../../redux/home/actions"
import InputForAddLists from '../material.input.open.list.add/material.input.open.list.add';

export class OpenListComponent extends React.Component {
    
    state = {
        className: 'slideUp'
    }
    
    closeList =() => {
        console.log(1111);
        console.log(this.props);
        
        this.setState({ className:'slideDown'}) 
        const {openList} = this.props
        setTimeout(() => openList({openList: false}),1000) 
        setTimeout(() =>this.setState({className:'slideUp'}),1100)   
    }
    render() {

        
        console.log(this.state.className);
        
        const open = this.props.openListt
        return ( open ?
            <div id ="anim-block" className ={this.state.className}>
                <div className='wrap-close-btn'>
                    <div onClick ={() => this.closeList()} className="close-btn"></div>
                </div>
                <div className ='wrap-list-add'>
                    <InputForAddLists />
                    
                </div>
            </div> : null
        )
    }
}
const mapStateToProps = function(state) {
    return{
      openListt: state.homePage.openList
    }
  }
export default connect(mapStateToProps,{openList})(OpenListComponent)