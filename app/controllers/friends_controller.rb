class FriendsController < ApplicationController
  def show
    friends = Friend.where("user_friend_id = ?", params[:id])
    render json: friends
  end
end
