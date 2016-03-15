class DeleteQuizTable < ActiveRecord::Migration
  def change
  	 drop_table :quizzes
  end
end
