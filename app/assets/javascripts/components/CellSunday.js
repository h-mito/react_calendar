import React from "react"

const CellSunday = ({year,month,day,onNewSchedule}) => {
  return (
    <div className="cell cell_clear"
          onClick={(e)=> {onNewSchedule(year,month,day)}}>
      <div className="sunday">{day}</div>
      <div>yotei</div>
    </div>
  )
}

export default CellSunday
