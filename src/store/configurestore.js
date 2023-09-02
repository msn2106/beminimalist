import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import loggerMiddleware from "./middlewares/logger";
// import monitorReducerEnhancer from "./enhancers/monitorReducer";

const configureAppStore = (preloadedState) => {
  let _store;
  const isClient = typeof window !== 'undefined';
  if(isClient){
    _store = configureStore({
      reducer: rootReducer,
      middleware: [loggerMiddleware],
      preloadedState,
      // enhancers: [monitorReducerEnhancer]
    })
  } else {
    _store = configureStore({
      reducer: rootReducer,
      middleware: [loggerMiddleware],
      preloadedState
    });
  }

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./reducers/root', () => store.replaceReducer(rootReducer));
  // }
  return _store;
}

const store = configureAppStore();
export default store;
