require 'uri'
require 'net/http'
require 'openssl'
require 'json'
require 'pry'

class PostsController < ApplicationController

    def index
        url = URI("https://www.reddit.com/api/v1/access_token?grant_type=password&username=thundershirtatx&password=f00manch00!")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE
        
        request = Net::HTTP::Post.new(url)
        request["cookie"] = 'loid=00000000003yiyjymz.2.1560752627799.Z0FBQUFBQmVwZWI3TUh4Qlo1REFEMk9uMDNTTG5tVmVKb1o0R0hObWotaXRITmZ0bEs4NWVrT0hXdTcwVk1NS1M2bUNFbWt0eG9uMFZ1dVphODBVOUFiQnVIVDF0WFZ0X1dIclBMQVhLbG1YdXh3MEtXeVlWUndBUHdLU3hxWktBeFpEZlJZR3FYZjE; edgebucket=Gsf4x7jxWRGKk056KD; csv=1; session=8ec43aba0b3616f7041d419a9ecdde4f9ee4bbc1gASVSQAAAAAAAABKXKqkXkdB16kqCMle7n2UjAdfY3NyZnRflIwoNjMwNmNiNmUwMzY1NTJmNDljNWEwMDI2ZmQ2ZDI0NWVlOTVkMjBmOZRzh5Qu'
        request["content-type"] = 'application/json'
        request["authorization"] = 'Basic UEtHUUlPWThkT2dtLVE6RV84TzcxRDY5N0gyd1JDNXNBLXpHWUlwV1dF'
        
        response = http.request(request)
        puts response.read_body
    end

end
