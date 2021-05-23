class UsersController < ApplicationController
    

  def new
    @user = User.new
  end
  def create
    @user = User.new user_params
    if @user.save
      session[:user_id] = @user.id
      flash[:success] = "Register success"
      redirect_to users_path
    else
      flash[:success] = "Register failed"
      render :new
    end
  end
  def login
  end
  def login_user
    user = User.find_by(name: params[:name])
    
    if user.present? && user.authenticate(params[:password])
        session[:user_id] = user.id
        redirect_to trangchu_path
    else
        flash[:alert] = "Invalid name or passs"
        render :login
  end
end
  private
  def user_params
    params.require(:user).permit :name, :password, :password_confirmation
  end
end
