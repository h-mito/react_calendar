import React from "react"
import CSchItem from "../containers/CSchItem"

const CellSaturday = ({year,month,day,schs,onNewSchedule}) => {
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
    <div className="cell"
          onClick={(e)=> {onNewSchedule(year,month,day)}}>
      <div className="saturday">{day}</div>
      <div>
        {items}
      </div>
    </div>
  )
}

export default CellSaturday
