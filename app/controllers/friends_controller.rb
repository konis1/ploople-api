class FriendsController < ApplicationController
  def index
    friends = Friend.all
    render json: friends
  end
end
