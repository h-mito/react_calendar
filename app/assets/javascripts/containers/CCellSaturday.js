import {connect} from "react-redux"
import CellSaturday from "../components/CellSaturday"
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

const CCellSaturday = connect(mapStateToProps, mapDispatchToProps)(CellSaturday)

export default CCellSaturday
