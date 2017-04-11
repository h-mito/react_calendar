import React from "react"

const CellNormal = ({year,month,day,onNewSchedule}) => {
  return (
    <div className="cell"
          onClick={(e)=> {onNewSchedule(year,month,day)}}>
      <div className="normal">{day}</div>
      <div>yotei</div>
    </div>
  )
}

export default CellNormal
