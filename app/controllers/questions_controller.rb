class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :edit, :update, :destroy]

  # GET /questions
  # GET /questions.json
  def index
    @questions = Question.paginate(page: params[:page], per_page: 15)
  end

  # GET /questions/1
  # GET /questions/1.json
  def show
  end

  # GET /questions/new
  def new
    @question = Question.new
  end

  # GET /questions/1/edit
  def edit
  end

  # POST /questions
  # POST /questions.json
  def create
    puts params[:question]
    category = Category.find_by_name(params[:question][:categories])
    puts category
    @question = category.questions.create
    @question.questionTitle = params[:question][:questionTitle]
    @question.image = params[:question][:image]
    puts @question
    @question.answer = params[:question][:answer]
    @question.choice1 = params[:question][:choice1]
    @question.choice2 = params[:question][:choice2]
    @question.choice3 = params[:question][:choice3]
    @question.choice4 = params[:question][:choice4]
    @question.save
    respond_to do |format|
      if @question.save
        format.html { redirect_to @question, notice: 'سوال با موفقیت ساخته شد.' }
        format.json { render :show, status: :created, location: @question }
      else
        format.html { render :new }
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /questions/1
  # PATCH/PUT /questions/1.json
  def update
    respond_to do |format|
      if @question.update(question_params)
        format.html { redirect_to @question, notice: 'سوال با موفقیت به روز رسانی شد' }
        format.json { render :show, status: :ok, location: @question }
      else
        format.html { render :edit }
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /questions/1
  # DELETE /questions/1.json
  def destroy
    @question.destroy
    respond_to do |format|
      format.html { redirect_to questions_url, notice: 'سوال با موفقیت جذف شد' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def question_params
      params.require(:question).permit(:category_id, :image, :questionTitle, :answer, :choice1, :choice2, :choice3, :choice4)
    end
end
