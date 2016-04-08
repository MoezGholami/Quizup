class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :edit, :update, :destroy]

  # GET /categories
  # GET /categories.json
  def index
    if(params.has_key?(:cat_title))
      @categories=Category.where('name like ?', '%'+params[:cat_title]+'%').paginate(:page => params[:page])
    else
      @categories = Category.paginate(:page => params[:page])
    end
  end

  # GET /categories/1
  # GET /categories/1.json
  def show
    if(params.has_key?(:id))
      @category=Category.find(params[:id])
    end
    if(params.has_key?(:q_title))
      @this_category_questions=@category.questions.where('questionTitle like ?', '%'+params[:q_title]+'%').paginate(:page => params[:page])
    else
      @this_category_questions=@category.questions.paginate(:page => params[:page])
    end
  end

  # GET /categories/new
  def new
    @category = Category.new
  end

  # GET /categories/1/edit
  def edit
  end

  # POST /categories
  # POST /categories.json
  def create
    @category = Category.new(category_params)

    respond_to do |format|
      if @category.save
        format.html { redirect_to @category, notice: 'Category was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  # PATCH/PUT /categories/1
  # PATCH/PUT /categories/1.json
  def update
    respond_to do |format|
      if @category.update(category_params)
        format.html { redirect_to @category, notice: 'Category was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  # DELETE /categories/1
  # DELETE /categories/1.json
  def destroy
    @category.destroy
    respond_to do |format|
      format.html { redirect_to categories_url, notice: 'Category was successfully destroyed.' }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def category_params
      params.fetch(:category, {})
    end
end
