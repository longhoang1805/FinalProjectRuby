class AddIduserToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :iduser, :string
  end
end
