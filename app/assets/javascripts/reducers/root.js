import {combineReducers} from "redux"
import schedules from "./schedules"

const rootReducer = combineReducers({
  schedules: schedules
})

export default rootReducer
