import React from "react"
import CCalendar2 from "../containers/CCalendar2"
import CScheduleAdd from "../containers/CScheduleAdd"
import {read_schedules} from "../actions/index"

const App = () =>{
  return (
    <div id="app">
      <CCalendar2 />
      <CScheduleAdd />
    </div>
  )
}

export default App
