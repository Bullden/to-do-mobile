import React from 'react';
import './App.css';
import HomeComponent from './components/home/home.component';
import { Provider} from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Store } from "redux";
import configureStore from "./redux/store";
import { RootState } from "./redux/rootReducer";
import { OpenListComponent } from './components/home/material.home/material.home.open.list/material.home.open.list';
import  OpenTaskComponent  from './components/home/material.home/material.home.open.tasks/material.home.open.tasks';
import  LoginComponent  from './components/auth/login/auth.login.component';

export const Path = {
  home: "/",
  addTask: '/add-task',
  signIn: '/sign-in'
};

const store = configureStore();
export const App =() => (
  <Provider store ={store}>
    <Router>
      <Route exact path ={Path.signIn} component = {LoginComponent} />
      <Route exact path ={Path.home} component = {HomeComponent} />
      <Route path ={Path.addTask} component = {OpenTaskComponent} />
    </Router>
  </Provider>
    // <div className="App">
    //    <HomeComponent />
    // </div>

)

// Ваш идентификатор клиента 
// 773877304496-0kp744umave2dfchcgnonvbg64gtjcbk.apps.googleusercontent.com

// Ваш секрет клиента 
// qBDYDCAjV6-n-OV8aUwSMYxV
// UoT_hSCCVhTaiXVWDRqtZJ0M
// k8nOQJh-4w5MwWnyuKE8xo1F
// sGCAR-0zJcpcIwgHV24RC9sQ




export default App;
