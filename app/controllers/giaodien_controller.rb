class GiaodienController < ApplicationController
    def index
        if session[:user_id]
           @user = User.find_by(id: session[:user_id])
        end
        @product = Product.all
    end
    def addcart
         @abc = Product.find(params[:id])
         @abc.update(iduser: session[:user_id])
         @abc1 = Cart.new(
             id_user: session[:user_id],
             products_id: params[:id]
         )
         @abc1.save
         redirect_to "/trangchu"
    end 
    def giohang
        if session[:user_id]
           @user = User.find_by(id: session[:user_id])
        end
        @cart = Cart.all
        @product = Product.all
        sql = "SELECT tong, SUM(tong) AS sum
        FROM products WHERE iduser = #{session[:user_id]}
        "
        @sum = ActiveRecord::Base.connection.exec_query(sql)
    end
    def xoa
        @cart = Cart.find(params[:id])
        @cart.destroy
        redirect_to "/sanpham/cart"
    end
    def soluong
        @abc = Product.find(params[:idss])
        @abc.update(
            soluong: params[:sl],
            tong: params[:total]
        )
        redirect_to "/sanpham/cart"
    end
    def sanpham
        @ab = Product.find(params[:id])
    end
end
