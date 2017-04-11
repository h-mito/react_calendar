import {connect} from "react-redux"
import ScheduleAdd from "../components/ScheduleAdd"
import {read_schedules,comment_change,new_schedule} from "../actions/index"

const mapStateToProps = (state) => {
  return {
    id: state.schedule.id,
    ymd: state.schedule.ymd,
    comment: state.schedule.comment
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCommentChange: (comment) => {
      dispatch(comment_change(comment))
    },
    onCommentAdd: (ymd, comment) => {

      var data = {
        ymd: ymd,
        comment: comment
      };

      $.ajax({
         type: "POST",
         url: "/calendar/insertSchedule",
         async: false,
         dataType: "json",
         data: data,
         success: function(data, dataType){
           if (data.status == true){
             dispatch(read_schedules(data.rows))
             let arr = ymd.split("/")
             dispatch(new_schedule(arr[0],arr[1],arr[2]))
           }
         },
         error :function(XMLHttpRequest, textStatus, errorThrown){
         }
      });

    },
    onCommentUpdate: (id, ymd, comment) => {
      var data = {
        id: id,
        ymd: ymd,
        comment: comment
      };

      $.ajax({
         type: "POST",
         url: "/calendar/updateSchedule",
         async: false,
         dataType: "json",
         data: data,
         success: function(data, dataType){
           if (data.status == true){
             dispatch(read_schedules(data.rows))
           }
         },
         error :function(XMLHttpRequest, textStatus, errorThrown){
         }
      });

    },
    onCommentDelete: (id, ymd) => {
      var data = {
        id: id
      };

      $.ajax({
         type: "POST",
         url: "/calendar/deleteSchedule",
         async: false,
         dataType: "json",
         data: data,
         success: function(data, dataType){
           if (data.status == true){
             dispatch(read_schedules(data.rows))
             let arr = ymd.split("/")
             dispatch(new_schedule(arr[0],arr[1],arr[2]))
           }
         },
         error :function(XMLHttpRequest, textStatus, errorThrown){
         }
      });

    }
  }
}

const CScheduleAdd = connect(mapStateToProps, mapDispatchToProps)(ScheduleAdd)

export default CScheduleAdd
