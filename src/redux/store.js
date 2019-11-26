import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from "./rootReducer";
import { all } from "redux-saga/effects";

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const composeEnhancers = composeWithDevTools({});
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, initialState, enhancer);
    if (module.hot) {
      module.hot.accept("./rootReducer", () => {
        const nextRootReducer = require("./rootReducer").default;
        store.replaceReducer(nextRootReducer);
      });
    }
  
    sagaMiddleware.run(function*() {
      yield all();
    });
  
    return store;
  }