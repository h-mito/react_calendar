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

export const edit_schedule = (id, ymd, comment) => {
  return {
    type: "EDIT_SCHEDULE",
    id: id,
    ymd: ymd,
    comment: comment
  }
}

export const read_schedules = (schs) => {
  return {
    type: "READ_SCHEDULES",
    schs: schs
  }
}

export const comment_change = (comment) => {
  return {
    type: "COMMENT_CHANGE",
    comment: comment
  }
}
