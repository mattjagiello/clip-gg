class Post < ApplicationRecord
    has_one :clip
    has_many :comments
end
