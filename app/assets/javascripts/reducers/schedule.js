const schedule = (state = {}, action) => {
  switch (action.type) {
    case "NEW_SCHEDULE":
      return {
        ymd: action.year + "/" + action.month + "/" + action.day,
        comment: ""
      }
    case "EDIT_SCHEDULE":
      return {
        ymd: action.year + "/" + action.month + "/" + action.day,
        comment: action.comment
      }
    default:
      return state
  }
}
