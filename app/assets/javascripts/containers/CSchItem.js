import {connect} from "react-redux"
import SchItem from "../components/SchItem"
import {edit_schedule} from "../actions/index"

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id,
    ymd: ownProps.ymd,
    comment: ownProps.comment
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id, ymd, comment) => {
      dispatch(edit_schedule(id, ymd,comment))
    }
  }
}

const CSchItem = connect(mapStateToProps, mapDispatchToProps)(SchItem)

export default CSchItem
