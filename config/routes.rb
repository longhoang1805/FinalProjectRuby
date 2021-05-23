Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'trangchu' => 'giaodien#index'
  get"dangnhap" => "users#login"
  post"dangnhap" => "users#login_user"
  get"sanpham/index" => "sanpham#index"
  get"sanpham/new" => "sanpham#new"
  post"sanpham/create" =>"sanpham#create"
  get"sanpham/edit/:id"=> "sanpham#edit"
  post"sanpham/edit/:id" => "sanpham#update"
  delete "sanpham/delete/:id" =>"sanpham#del"
  get "addcart/:id" => "giaodien#addcart"
  get "sanpham/cart" =>"giaodien#giohang"
  get "sanpham/cart/soluong/:id" => "giaodien#soluong"
  delete "cart/xoa/:id" =>"giaodien#xoa"
  get "trangchu/sanpham/:id" => "giaodien#sanpham"
  resources :users
end
