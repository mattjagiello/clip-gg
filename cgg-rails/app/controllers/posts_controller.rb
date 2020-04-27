require 'open-uri'
require 'net/http'
require 'json'
require 'pry'

class PostsController < ApplicationController

    def index
    url = 'https://oauth.reddit.com/r/livestreamfail/top'
    uri = URI.parse(url)
    response = Net::HTTP.get_response(uri)
    result = JSON.parse(response.body)
    binding.pry
    end


end
