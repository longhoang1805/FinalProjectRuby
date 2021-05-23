class Cart < ApplicationRecord
  belongs_to :products ,optional: true
end
