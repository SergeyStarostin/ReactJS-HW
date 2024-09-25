import { createStore } from "redux";
import themeReducer from "./reducer.js";

const store = createStore(themeReducer);

export default store;
