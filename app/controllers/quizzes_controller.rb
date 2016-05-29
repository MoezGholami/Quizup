#TODO: The URLs work only on production, repair them

class QuizzesController < ApplicationController

	def add_score(uid, cid, this_score)
		puts "sssssssssssssssssssssss" + this_score.to_s
		if User.find(uid).user_ranks.where(category_id=cid).empty?
			new_rank=User.find(uid).user_ranks.build(:category_id => cid, :score => this_score)
			new_rank.save!
		else
			new_rank=User.find(uid).user_ranks.where(category_id=cid).first
			new_rank.score=new_rank.score+this_score
			new_rank.save!
		end
		
	end

	def make_quiz
		@questions = Category.find(params[:id]).questions.limit(5).order("RANDOM()")
		flash[:questions] = @questions
		respond_to do |format|
	        format.html { render "quizzes/quiz", notice: "" }
	    end
	end

	def reload_quiz
		puts params[:rival_user_id] == current_user.id
		@question_answer = '{'
		if(current_user.id.to_s == params[:rival_user_id].to_s)
			@questions = []
			(0..(params[:num].to_i-1)).each do |i| 
				q = params["q"+i.to_s].split(',')
				@questions.push(Question.find(q[0]))
				if i == 0
					@question_answer += '"' + q[0].to_s + '":' + q[1].to_s
				else
					@question_answer += ',"' + q[0].to_s + '":' + q[1].to_s 
				end
			end
			@question_answer += '}'

			# gon.questions = @questions
			# gon.compettitor = params[:user_id]
			gon.question_answer = @question_answer
			@rival = User.find(params[:user_id])
			@questions.each do |question| 
				puts "question " + question.id.to_s
			end
			respond_to do |format|
		        format.html { render "quizzes/quiz", notice: "" }
		    end
		else
			respond_to do |format|
		        format.html { render "quizzes/permission_denied", notice: " شما مجاز به انجام این کوییز نیستید" }
		    end
		end		
	end

	def show_results
		@user = current_user
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
				question_answer = params[:questions]
				@quiz_url = "http://www.cafequiz.ir/reload_quiz?"
				puts question_answer 
				question_answer.each do |index, qa|
					puts qa
					puts index
					@quiz_url += "q" + index.to_s + "=" + qa["qid"].to_s + "," + qa["resp"] + "&"
				end
				add_score(current_user.id, @questions[0]['category_id'], @score1.to_i)
				@quiz_url += "num=" + question_answer.length.to_s + "&rival_user_id=" + @rival.id.to_s + "&user_id=" + current_user.id.to_s + "&score=" + params[:score] + "&category_id=" + @questions[0]['category_id'].to_s
				QuizzMailer.offline_quizz_announce_email(@rival, @quiz_url).deliver_now
			elsif(params[:url].include? "reload_quiz")
				uri = URI::parse(params[:url])
				url_params = CGI::parse(uri.query)
				@score1 = params[:score]
				@score2 = url_params["score"][0]
				@rival = User.find(url_params["user_id"])[0]
				add_score(current_user.id, url_params['category_id'][0].to_i, @score1.to_i)
				resutlUrl = 'http://www.cafequiz.ir/show_results?score1=' + @score1 + "&score2=" + @score2 + "&user_id=" + current_user.id.to_s + "&rival_id=" + @rival.id.to_s
				QuizzMailer.offline_quizz_result_email(@rival, resutlUrl).deliver_now

				if @score2 < @score1
					current_user.num_of_wins += 1
					puts("##################### 22 ######################")
				end
				  puts"@@@@ mehrdad"
				puts current_user.num_of_games
				puts"@@@@@ end"
					current_user.num_of_games += 1
					current_user.score += @score1.to_i
					current_user.save!
				puts"@@@@ omid"
				puts current_user.num_of_games
				puts"@@@@@ end"


			end

			respond_to do |format|
    			format.html { render "quizzes/results" }
			end	
		else
			if(current_user.id == params[:rival_id].to_i)
				@rival = User.find(params[:user_id])
				puts User.find(params[:user_id])
				@score1 = params[:score1]
				@score2 = params[:score2]

				if @score2 > @score1
					current_user.num_of_wins += 1
					puts("##################### 44 ######################")
				end
				puts("##################### 55 ######################")
				current_user.num_of_games += 1
				current_user.score += @score2.to_i
				current_user.save!

				respond_to do |format|
	    			format.html { render "quizzes/results" }
				end
			else
				respond_to do |format|
	    			format.html { render "quizzes/permission_denied" }
				end
			end	
		end
		if(current_user.score >= 1000 and current_user.acheivements.find(1) == nil)
			current_user.acheivements << Acheivement.find(1)
		end

		if(current_user.num_of_wins >= 2 and current_user.acheivements.find(2) == nil)
			current_user.acheivements << Acheivement.find(2)
			puts "aaaaaaaaaaaaaaaaffffffffffffffffff"
		end

		if(current_user.num_of_games >= 10 and current_user.acheivements.find(3) ==nil)
			current_user.acheivements << Acheivement.find(3)
		end

		if(current_user.acheivements.size() > 2  and current_user.acheivements.find(4) == nil)
			current_user.acheivements << Acheivement.find(4)
		end

		current_user.save


		end


end