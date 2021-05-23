require "test_helper"

class SanphamControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sanpham_index_url
    assert_response :success
  end

  test "should get new" do
    get sanpham_new_url
    assert_response :success
  end

  test "should get edit" do
    get sanpham_edit_url
    assert_response :success
  end
end
