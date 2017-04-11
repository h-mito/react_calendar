import React from "react"
import CCellNormal from "../containers/CCellNormal"
import CCellSaturday from "../containers/CCellSaturday"
import CCellSunday from "../containers/CCellSunday"
import CellNone from "./CellNone"
import CYmSelector from "../containers/CYmSelector"

const Calendar2 = ({year, month , schedules}) => {
  let cells = []
  let i,j,ycnt
  let staDay = new Date(year,month-1,1)
  let staYoubi = staDay.getDay()
  let endDay = new Date(year,month-1,1)
  endDay.setMonth(endDay.getMonth() + 1)
  endDay.setDate(endDay.getDate() - 1)
  let endYoubi = endDay.getDay()

  j = 0
  for (i = 0 ; i< staYoubi; i++){
    cells.push(<CellNone key={j} />)
    j = j -1
  }

  ycnt = staYoubi
  for (i = 1 ; i <= endDay.getDate() ;i++){
    if (ycnt == 0){
      cells.push(<CCellSunday key={i} year={year} month={month} day={i} />)
      ycnt++
    }
    else if (ycnt == 6){
      cells.push(<CCellSaturday key={i} year={year} month={month} day={i} />)
      ycnt = 0
    }
    else {
      cells.push(<CCellNormal key={i} year={year} month={month} day={i} />)
      ycnt++
    }
  }

  j = 100
  for (i = (endYoubi+1) ; i <= 6 ; i++){
    cells.push(<CellNone key={j} />)
    j = j +1
  }

  return (
    <div>
      <CYmSelector />
      <div id="calendar">
        {cells}
      </div>
    </div>
  )
}

export default Calendar2
