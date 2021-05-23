class AddTongToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :tong, :integer
  end
end
