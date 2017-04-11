class CreateSchedules < ActiveRecord::Migration[5.0]
  def change
    create_table :schedules do |t|
      t.string :ymd
      t.string :comment

      t.timestamps
    end
  end
end
