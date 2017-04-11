export const ym_change = (year, month) => {
  return {
    type: "YM_CHANGE",
    year: year,
    month: month
  }
}

export const new_schedule = (year,month,day) => {
  return {
    type: "NEW_SCHEDULE",
    year: year,
    month: month,
    day: day
  }
}

export const edit_schedule = (year,month,day,comment) => {
  return {
    type: "EDIT_SCHEDULE",
    year: year,
    month: month,
    day: day,
    comment: comment
  }
}
