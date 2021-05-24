class SanphamController < ApplicationController
  def index
     if session[:user_id]
           @user = User.find_by(id: session[:user_id])
        end
    @sp = Product.all
  end

  def new
  end
  def create 
    @sp = Product.new(
      tensp: params[:tensp],
      price: params[:price],
      soluong: params[:soluong],
      ghichu: params[:ghichu],
      avatar: params[:avatar]
    )
    @sp.save
    redirect_to "/sanpham/index"
  end



  def edit
    @abc = Product.find(params[:id])
  end

  def update
     @abc = Product.find(params[:id])
      @abc.update(
      tensp: params[:tensp],
      price: params[:price],
      soluong: params[:soluong],
      ghichu: params[:ghichu],
    )
     redirect_to "/sanpham/index"
  end
  def del
     if session[:user_id]
           @user = User.find_by(id: session[:user_id])
        end
    @abc = Product.find(params[:id])
    @abc.destroy
    redirect_to "/sanpham/index"
  end
end
