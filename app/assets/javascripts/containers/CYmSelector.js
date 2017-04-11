import {connect} from "react-redux"
import YmSelector from "../components/YmSelector"
import {ym_change, read_schedules} from "../actions/index"

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

      $.ajax({
         type: "GET",
         url: "/calendar/readSchedules/" + year + "/" + month,
         async: false,
         dataType: "json",
         data: "name=John&location=Boston",
         success: function(data, dataType){
           if (data.status == true){
             if (data.rows.length > 0){
               dispatch(read_schedules(data.rows))
             }
             else{
               dispatch(read_schedules([]))
             }
           }
         },
         error :function(XMLHttpRequest, textStatus, errorThrown){
         }
      });
    }
  }
}

const CYmSelector = connect(mapStateToProps, mapDispatchToProps)(YmSelector)

export default CYmSelector
