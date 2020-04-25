class ClipsController < ApplicationController
    belongs_to :post
    has_many :user_clips
    has_many :comments, through: :posts
    has_many :users, through: :user_clips
end
