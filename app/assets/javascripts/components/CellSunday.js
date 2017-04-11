import React from "react"
import CSchItem from "../containers/CSchItem"

const CellSunday = ({year,month,day,schs,onNewSchedule}) => {
  let items = []
  schs.map((item) => {
    items.push(<CSchItem
                  key={item.id}
                  id={item.id}
                  ymd={item.ymd}
                  comment={item.comment}
                />)
  })

  return (
    <div className="cell cell_clear"
          onClick={(e)=> {onNewSchedule(year,month,day)}}>
      <div className="sunday">{day}</div>
      <div>
        {items}
      </div>
    </div>
  )
}

export default CellSunday
