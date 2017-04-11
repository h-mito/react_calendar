import React from "react"

const CellSaturday = ({year,month,day,onNewSchedule}) => {
  return (
    <div className="cell"
          onClick={(e)=> {onNewSchedule(year,month,day)}}>
      <div className="saturday">{day}</div>
      <div>yotei</div>
    </div>
  )
}

export default CellSaturday
