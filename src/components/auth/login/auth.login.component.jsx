import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {signIn} from '../../../redux/auth/actions'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './auth.login.component.css'

export class LoginComponent extends React.Component {
    
    sign ='https://accounts.google.com/o/oauth2/v2/auth?client_id=773877304496-0kp744umave2dfchcgnonvbg64gtjcbk.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/gmail.send&redirect_uri=https://todowebsite.herokuapp.com&access_type=offline'
    signInn() {
        localStorage.setItem('signIn',true)   
        window.location = this.sign
        const {signIn} = this.props
        signIn({ 
            signIn: true
        }) 
    }
    render(){
        return(
            <div>
                <div className ="wrap-sign-in">
                    <div className ='title-sign-in'><div>Sign in</div></div>
                    <div className ='wrap-s-i'>
                        <Card onClick ={() => this.signInn()} className ="sign-in-card">
                            <CardContent className ='text-sign-in'>
                                <Typography >Sign in with Google</Typography>
                            </CardContent>
                        </Card>        
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function (state) {
    return { }
}
export default connect(mapStateToProps,{signIn})(LoginComponent)