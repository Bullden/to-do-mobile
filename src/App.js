import React from 'react';
import './App.css';
import HomeComponent from './components/home/home.component';
import { Provider} from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Store } from "redux";
import configureStore from "./redux/store";
import { RootState } from "./redux/rootReducer";

export const Path = {
  home:"/"
};

const store = configureStore();
export const App =() => (
  <Provider store ={store}>
    <Router>
      <Route path ={Path.home} component = {HomeComponent} />
    </Router>
  </Provider>
    // <div className="App">
    //    <HomeComponent />
    // </div>

)

export default App;
