const ym = (state = getInitYm(), action) => {
  switch (action.type) {
    case "YM_CHANGE":
      return {
        year: action.year,
        month: action.month
      }
    default:
      return state
  }
}

const getInitYm = () => {
  let today = new Date()
  let y = today.getFullYear()
  let m = today.getMonth() + 1

  return {
    year: y,
    month: m
  }
}

export default ym
