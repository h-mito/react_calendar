class CalendarController < ApplicationController
  def index
  end

  def insertSchedule
    response = {status:true}

    s = Schedule.new({ymd: params[:ymd], comment: params[:comment]})
    s.save()

    arr = params[:ymd].split("/")
    likeStr = arr[0] + "/" + arr[1] + "/%"
    recs = Schedule.where("ymd like ?", likeStr)
            .order("ymd")

    response["rows"] = recs

    render :json=> response
  end

  def readSchedules
    response = {status:true}

    likeStr = params[:year] + "/" + params[:month] + "/%"
    recs = Schedule.where("ymd like ?", likeStr)
            .order("ymd")

    response["rows"] = recs

    render :json=> response
  end

end
