import { combineReducers } from "redux";
import alert from "./alert";
import web3 from './web3';
import user from './user'
import projects from "./projects";


export default combineReducers({
alert,
web3,
user,
projects
});