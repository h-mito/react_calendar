import {connect} from "react-redux"
import Calendar2 from "../components/Calendar2"

const mapStateToProps = (state) => {

  return {
    year: state.ym.year,
    month: state.ym.month,
    schedules: state.schedules
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const CCalendar2 = connect(mapStateToProps, mapDispatchToProps)(Calendar2)

export default CCalendar2
