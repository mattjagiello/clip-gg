require 'uri'
require 'net/http'
require 'openssl'
require 'json'
require 'pry'
require "awesome_print"

class CommentsController < ApplicationController

    def index
        url = URI("https://www.reddit.com/r/LivestreamFail/comments/gdrvy5/fed_accidentally_breaks_the_window/.json")
        
        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE
        
        request = Net::HTTP::Get.new(url)
        request["cookie"] = 'loid=00000000003yiyjymz.2.1560752627799.Z0FBQUFBQmVwZWI3TUh4Qlo1REFEMk9uMDNTTG5tVmVKb1o0R0hObWotaXRITmZ0bEs4NWVrT0hXdTcwVk1NS1M2bUNFbWt0eG9uMFZ1dVphODBVOUFiQnVIVDF0WFZ0X1dIclBMQVhLbG1YdXh3MEtXeVlWUndBUHdLU3hxWktBeFpEZlJZR3FYZjE; edgebucket=Gsf4x7jxWRGKk056KD; csv=1; session=8ec43aba0b3616f7041d419a9ecdde4f9ee4bbc1gASVSQAAAAAAAABKXKqkXkdB16kqCMle7n2UjAdfY3NyZnRflIwoNjMwNmNiNmUwMzY1NTJmNDljNWEwMDI2ZmQ2ZDI0NWVlOTVkMjBmOZRzh5Qu'
        
        response = http.request(request)
        puts response.read_body
        json_response = JSON.parse(response.body, symbolize_names: true)
        binding.pry
        # json_response = JSON.parse(response.body, symbolize_names: true) #=> {key: :value}
        # ap(json_response)

        # json_response[:data][:children].each do |post|
        #     p = Post.create(
        #         post_name: post[:data][:title],
        #         post_url: post[:data][:permalink],
        #         post_upvotes: post[:data][:ups],
        #       )
        #     c = Clip.create(
        #         clip_name: post[:data][:title],
        #         clip_url: post[:data][:permalink],
        #         post_id: Post.last.id
        #     )
        # end
        
        # p posts_extract = URI.extract(response.body)
        # p posts_string

        # posts_string = response.body.to_s
        # p posts_string.force_encoding( Encoding::UTF_8 )
        # binding.pry

        posts = Post.all
        render json: posts
    end

end
