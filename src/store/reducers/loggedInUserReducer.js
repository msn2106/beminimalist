import { initialstate } from "../initialstate";
import { PUT_USER } from "../actions";

const loggedInUserReducer = (state = initialstate.loggedinuser, action) => {
  switch (action.type) {
    case PUT_USER:
      return { ...action.user };
    default:
      return state;
  }
};

export default loggedInUserReducer;
