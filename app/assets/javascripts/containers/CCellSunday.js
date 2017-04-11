import {connect} from "react-redux"
import CellSunday from "../components/CellSunday"
import {new_schedule} from "../actions/index"

const mapStateToProps = (state, ownProps) => {
  return {
    year: ownProps.year,
    month: ownProps.month,
    day: ownProps.day
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNewSchedule: (year,month,day) => {
      alert("onNewSchedule-" + year + "/" + month + "/" +day )
      dispatch(new_schedule(year,month,day))
    }
  }
}

const CCellSunday = connect(mapStateToProps, mapDispatchToProps)(CellSunday)

export default CCellSunday
