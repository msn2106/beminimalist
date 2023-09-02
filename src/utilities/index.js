import { storeKeys } from "../constants";
import { consolelogs } from "../constants/consoleerrormessages";
import store from "../store/configurestore";

export const getStoreState = (key) => {
  try {
    const state = store.getState();
    switch (key) {
      case storeKeys.productReducer:
        return state[storeKeys.productReducer];
      case storeKeys.loggedInUserReducer:
        return state[storeKeys.loggedInUserReducer];
      default:
        return state;
    }
  } catch (error) {
    console.error(consolelogs.utilities.index.getStoreState);
    throw error;
  }
};
