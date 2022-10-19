class Api::V1::GreetingsController < ApplicationController
  def index
    offset = rand(Greeting.count)
    @greeting_random = Greeting.offset(offset).first
    render json: @greeting_random
  end
end
