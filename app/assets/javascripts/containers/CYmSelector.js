import {connect} from "react-redux"
import YmSelector from "../components/YmSelector"
import {ym_change} from "../actions/index"

const mapStateToProps = (state) => {
  return {
    year: state.ym.year,
    month: state.ym.month
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onYmChange: (year, month) => {
      dispatch(ym_change(year,month))
    }
  }
}

const CYmSelector = connect(mapStateToProps, mapDispatchToProps)(YmSelector)

export default CYmSelector
