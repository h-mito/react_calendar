Rails.application.routes.draw do
  get 'calendar/index'
  post 'calendar/insertSchedule'
  post 'calendar/updateSchedule'
  post 'calendar/deleteSchedule'
  get 'calendar/readSchedules/:year/:month' => 'calendar#readSchedules'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
