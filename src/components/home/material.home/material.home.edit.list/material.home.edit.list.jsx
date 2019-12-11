import React from 'react';
import { connect } from "react-redux";
import { doEditList , putList } from '../../../../redux/home/actions';
import './material.home.edit.list.css'
import EditIcon from '@material-ui/icons/Edit';
import { Input } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';



export class EditList extends React.Component {

    state = {
        className: 'slideUp',
        arrayOfTasks: [],
        isOpenInputEdit: false,
        nameList:''
    }
    closeEditList = () => {
        this.setState({ className: 'slideDown' })
        const { doEditList } = this.props
        setTimeout(() => doEditList({ editList: {} }), 1000)
        setTimeout(() => this.setState({ className: 'slideUp' }), 1100)
    }
    editNameList = () => {
        this.setState({isOpenInputEdit: true})
        
    }
    handle = (event) => this.setState({ nameList: event.target.value });
    checkNameList = () => {

        this.setState({isOpenInputEdit:false})
        const {putList} = this.props
        putList({
           editList:{
                _id: this.props.editList._id,
                nameTask: this.props.editList.nameTask,
                date: this.props.editList.date,
                list: {
                    nameList: this.state.nameList,
                    _id: this.props.editList.list._id,
                    background: this.props.editList.list.background
                },
                countList: this.props.editList.countList
           }
        })      
    }
    componentDidMount() {

    }

    render() {
        let arr = []
        if (this.props.editList.list) {
            this.props.addTask.forEach((item) => {
                if (item.list._id === this.props.editList.list._id) {
                    arr.push(item)
                }
            })
        }
        const open = this.props.editList
        return (open.list ?
            <div id="anim-block" className={this.state.className} style ={{background: this.props.editList.list.background}}>
                <div className=' wrap-close-btn'>
                    <div onClick={() => this.closeEditList()} className="close-btn"></div>
                </div>
                <div className="content-wrap">
                    <div className ="wrap-name-edit">
                        {!this.state.isOpenInputEdit ? (
                            <div className ="name-list-for-task">{this.props.editList.list.nameList}</div>
                            ) : <div><Input placeholder ={this.props.editList.list.nameList} value={this.state.nameList} onChange={this.handle}></Input></div>}
                        {!this.state.isOpenInputEdit ? (
                            <div className ="edit-icon" onClick ={() => this.editNameList()}><EditIcon/></div>
                        ): <div className ="check-icon" onClick = {() => this.checkNameList()}><CheckIcon/></div>} 
                    </div>
                    <div className ="count-taskss">{this.props.editList.countList} task(s)</div>
                    {arr.map((i) => (
                        <div className="name-tasks-wrap">
                            <div className='name-tasks'>{i.nameTask}</div>
                        </div>
                    ))}
                </div>
            </div> : null
        )
    }
}
const mapStateToProps = function (state) {
    return {
        editList: state.homePage.editList,
        addTask: state.homePage.addTask
    }
}
export default connect(mapStateToProps, { doEditList, putList })(EditList)