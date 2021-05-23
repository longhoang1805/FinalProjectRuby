class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :tensp
      t.integer :price
      t.integer :soluong
      t.string :ghichu
      t.string :avatar

      t.timestamps
    end
  end
end
