class QuizzesController < ApplicationController
	def make_quiz
		@random_user = nil
		while @random_user == nil or @random_user.id == current_user.id do
			@random_user = User.offset(rand(User.count)).first
		end
		@questions = Category.find(params[:id]).questions.limit(5).order("RANDOM()")
		@quiz_url = "http://www.cafequiz.ir/reload_quiz?questions=" + @questions[0].id.to_s + "," + @questions[1].id.to_s + "," + @questions[2].id.to_s + "," + @questions[3].id.to_s + "," + @questions[4].id.to_s + "&user_id=" + current_user.id.to_s
		gon.questions = @questions
		QuizzMailer.offline_quizz_announce_email(@random_user, @quiz_url).deliver_now
		respond_to do |format|
	        format.html { render "quizzes/quiz", notice: "" }
	    end
	end

	def reload_quiz
		@questions = Question.find params[:questions].split(',')
		gon.questions = @questions
		gon.compettitor = params[:user_id]
		puts @questions
		respond_to do |format|
	        format.html { render "quizzes/quiz", notice: "" }
	    end
	end

	def update_user_score_in_category
		@score = params[:score]

		respond_to do |format|
	        render :action => 'show_results', :locals => {:score => "10"}
	    end
	end

	def show_results

	end

end