import React from 'react';
import './home.component.css'
import SimpleList from './material.home/material.home.list.component/material.home.list.component';
import AddButton from './material.home/material.home.button/material.home.button'
import CardsComponent from './material.home/material.home.cards.component/material.home.cards.component';
import OpenListComponent from './material.home/material.home.open.list/material.home.open.list';
import { Link } from '@material-ui/core';
import { connect } from "react-redux";
import { Redirect } from "react-router"
import { doInitToDo } from "../../redux/home/actions"
import { OpenTaskComponent } from './material.home/material.home.open.tasks/material.home.open.tasks';
import  EditList  from './material.home/material.home.edit.list/material.home.edit.list';

export class HomeComponent extends React.Component {
    componentDidMount() {
        const {doInitToDo} = this.props
        doInitToDo({}) 
        console.log(this.props.signIn);
        
    }
    render(){
         const signIn = this.props.signIn
        return( 
            <div>
                <p className="p-name">Today</p>
                <OpenListComponent/>
                <EditList />
                <SimpleList />
                <AddButton />
                <CardsComponent />
            </div> 
        )
    }
}
const mapStateToProps = function (state) {
    return {
        signIn: state.authPage.signIn
    }
}
export default connect(mapStateToProps, { doInitToDo })(HomeComponent)