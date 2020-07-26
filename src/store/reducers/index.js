import { combineReducers } from "redux";

import auth from "./auth";
import orders from "./orders";
import myOffers from "./myOffers";
import allOffers from "./allOffers";

export default combineReducers({
  auth,
  myOffers,
  orders,
  allOffers,
});
