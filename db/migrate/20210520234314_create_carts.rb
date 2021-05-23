class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.string :id_user
      t.references :products, null: false, foreign_key: true

      t.timestamps
    end
  end
end
