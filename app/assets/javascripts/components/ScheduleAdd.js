import React from "react"

const ScheduleAdd = ({id, ymd, comment, onCommentChange, onCommentAdd, onCommentUpdate, onCommentDelete}) => {
  let inpComment
  let btn
  if (id == -1){
    btn = (<button onClick={(e) => onCommentAdd(ymd, inpComment.value)}>
            追加
          </button>)
  }
  else {
    btn = (
          <div>
            <button onClick={(e) => onCommentUpdate(id, ymd, inpComment.value)}>
              修正
            </button>
            {"  "}
            <button onClick={(e) => onCommentDelete(id, ymd)}>
              削除
            </button>
          </div>
        )
  }

  return (
    <div className="right-side">
      <label className="id">ID={id}</label>
      <br />
      <label className="ymd">{ymd}</label>
      <br />
      <input
        value={comment}
        ref={(node) => inpComment = node}
        onChange={(e) => onCommentChange(e.target.value)}
      />
      <br />
      {btn}
    </div>
  )
}

export default ScheduleAdd
