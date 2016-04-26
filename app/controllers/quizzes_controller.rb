class QuizzesController < ApplicationController
	def make_quiz
		@questions = Category.find(params[:id]).questions.limit(5).order("RANDOM()")
		flash[:questions] = @questions
		respond_to do |format|
	        format.html { render "quizzes/quiz", notice: "" }
	    end
	end

	def reload_quiz
		@questions = Question.find params[:questions].split(',')
		gon.questions = @questions
		gon.compettitor = params[:user_id]
		@rival = User.find(params[:user_id])
		respond_to do |format|
	        format.html { render "quizzes/quiz", notice: "" }
	    end
	end

	def update_user_score_in_category
		@score = params[:score]

		render notice: "مسابقه به پایان رسید"
	end

	def show_results
		puts request.fullpath
		@questions = flash[:questions]
		@score1 = "0"
		@score2 = "0"
		# puts @questions
		if(params[:url] != nil)
			if(params[:url].include? "make_quiz")
				@rival = nil
				while @rival == nil or @rival.id == current_user.id do
					@rival = User.offset(rand(User.count)).first
				end
				@score1 = params[:score]
				@quiz_url = "http://www.cafequiz.ir/reload_quiz?questions=" + @questions[0]['id'].to_s + "," + @questions[1]['id'].to_s + "," + @questions[2]['id'].to_s + "," + @questions[3]['id'].to_s + "," + @questions[4]['id'].to_s + "&user_id=" + current_user.id.to_s + "&score=" + params[:score]
				QuizzMailer.offline_quizz_announce_email(@rival, @quiz_url).deliver_now
			elsif(params[:url].include? "reload_quiz")
				uri = URI::parse(params[:url])
				url_params = CGI::parse(uri.query)
				@score1 = params[:score]
				@score2 = url_params["score"][0]
				@rival = User.find(url_params["user_id"])[0]
				resutlUrl = 'http://www.cafequiz.ir/show_results?score1=' + @score1 + "&score2=" + @score2 + "&user_id=" + current_user.id.to_s
				QuizzMailer.offline_quizz_result_email(@rival, resutlUrl).deliver_now	
			end

		else
			
			@rival = User.find(params[:user_id])
			puts "ssssssssssssssssssssssssssss"
			puts User.find(params[:user_id])
			@score1 = params[:score1]
			@score2 = params[:score2]
		end
		respond_to do |format|
    		format.html { render "quizzes/results" }
		end			
	end
end