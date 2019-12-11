import React from 'react';
import TextField from '@material-ui/core/TextField';
import "./material.input.open.list.add.css";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import {addList} from "../../../../redux/home/actions"

export class InputForAddLists extends React.Component {
    state = {
        nameList:''
    }
    handle = (event) => this.setState({ nameList: event.target.value });
    addList =() => {

        const {addList} = this.props
        addList({
            nameList: this.state.nameList
        }) 
        
    }
    render() {
        return (
            <div>
                <div className ='form-list-add-wrap'>
                    <form noValidate autoComplete="off" className ="form-list-add">
                        <TextField className="form" label="Name list" value = {this.state.nameList} onChange={this.handle}/>
                    </form>
                </div>
                <div className="wrap-button-done">
                    <Button className ="button-done" color="primary" onClick ={() => this.addList()}>Done</Button>
                </div>
            </div>   
        );
    } 
}
const mapStateToProps = function(state) {
    return{}
  }
export default connect(mapStateToProps,{addList})(InputForAddLists)