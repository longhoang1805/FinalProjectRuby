class Product < ApplicationRecord
    mount_uploader :avatar, AvatarUploader
    has_many :carts
end
