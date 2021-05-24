class SearchController < ApplicationController

def index
end

def results
	@product = Product.where('tensp LIKE ?',"%#{params[:q]}%")
	
end

end

