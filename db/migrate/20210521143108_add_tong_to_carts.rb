class AddTongToCarts < ActiveRecord::Migration[6.1]
  def change
    add_column :carts, :tong, :integer
  end
end
