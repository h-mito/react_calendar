const schedule = (state = {id:-1, ymd: "0/0/0", comment: ""}, action) => {
  switch (action.type) {
    case "NEW_SCHEDULE":
      return {
        id: -1,
        ymd: action.year + "/" + action.month + "/" + action.day,
        comment: ""
      }
    case "EDIT_SCHEDULE":
      return {
        id: action.id,
        ymd: action.ymd,
        comment: action.comment
      }
    case "COMMENT_CHANGE":
      return {
        id : state.id,
        ymd: state.ymd,
        comment: action.comment
      }
    default:
      return state
  }
}

export default schedule
