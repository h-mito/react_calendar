import {combineReducers} from "redux"
import schedules from "./schedules"
import ym from "./ym"
import schedule from "./schedule"

const rootReducer = combineReducers({
  schedules: schedules,
  ym: ym,
  schedule: schedule
})

export default rootReducer
