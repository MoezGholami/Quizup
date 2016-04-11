require 'test_helper'

class CategoriesControllerTest < ActionController::TestCase
  setup do
    @category = categories(:one)
    @firstQuestion = questions(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:categories)
  end

  test "must load valid searched category name" do
    get :index, { :params => {:cat_title => 'سلام'}}
    assert_equal([@category], :categories)
  end

  test "must load nothing with invalid category name" do
    get :index, { :params => {:cat_title => 'خداحافظ'}}
    assert_empty(:categories)
  end
  test "must load all categories without searching" do
    get :index
    assert_equal([@category], :categories)
  end

  test "load nothing with invalid question name" do
    get :show, { :params => {:q_title => 'خداحافظ'}}
    assert_empty(:this_category_questions)
  end
  test "load question search match" do
    get :show, { :params => {:q_title => 'عزیزم'}}
    assert_empty([@firstQuestion], :this_category_questions)
  end
  test "load all with no searching on questions" do
    get :show
    assert_equal(:this_category_questions, questions)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create category" do
    assert_difference('Category.count') do
      post :create, category: {  }
    end

    assert_redirected_to category_path(assigns(:category))
  end

  test "should show category" do
    get :show, id: @category
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @category
    assert_response :success
  end

  test "should update category" do
    patch :update, id: @category, category: {  }
    assert_redirected_to category_path(assigns(:category))
  end

  test "should destroy category" do
    assert_difference('Category.count', -1) do
      delete :destroy, id: @category
    end

    assert_redirected_to categories_path
  end
end
