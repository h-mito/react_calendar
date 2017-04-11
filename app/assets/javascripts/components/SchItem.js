import React from "react"

const SchItem = ({id, ymd, comment, onItemClick}) => {
  return (
    <div
      className="schItem"
      onClick= {(e) =>{
        e.stopPropagation()
        onItemClick(id, ymd, comment)
      }}
    >
      {comment}
    </div>
  )
}

export default SchItem
