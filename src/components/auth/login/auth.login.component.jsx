import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {signIn} from '../../../redux/auth/actions'

export class LoginComponent extends React.Component {
    sign ='https://accounts.google.com/o/oauth2/v2/auth?client_id=773877304496-kagp9hp95ffvgd6v0od1p1hq4t9psss3.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/gmail.send&redirect_uri=http://localhost:3000&access_type=offline'
    signInn() {
        window.location = this.sign
        // const {signIn} = this.props
        // signIn({ })
        
    }
    render(){
        return(
            <div>
                <div>Hello</div>
                <div>
                    <Button onClick ={() => this.signInn()}>Sign in with Google</Button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function (state) {
    return { }
}
export default connect(mapStateToProps)(LoginComponent)