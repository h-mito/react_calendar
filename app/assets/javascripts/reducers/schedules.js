const schedules = (state = [], action) => {
  switch (action.type) {
    case "READ_SCHEDULES":
      return action.schs

    default:
      return state
  }
}

export default schedules
