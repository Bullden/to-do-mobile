import React from 'react';
import './App.css';
import HomeComponent from './components/home/home.component';
import { Provider} from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Store } from "redux";
import configureStore from "./redux/store";
import { RootState } from "./redux/rootReducer";
import { OpenListComponent } from './components/home/material.home/material.home.open.list/material.home.open.list';
import { OpenTaskComponent } from './components/home/material.home/material.home.open.tasks/material.home.open.tasks';

export const Path = {
  home:"/",
  addTask: '/add-task',
};

const store = configureStore();
export const App =() => (
  <Provider store ={store}>
    <Router>
      <Route exact path ={Path.home} component = {HomeComponent} />
      <Route path ={Path.addTask} component = {OpenTaskComponent} />
    </Router>
  </Provider>
    // <div className="App">
    //    <HomeComponent />
    // </div>

)

export default App;
