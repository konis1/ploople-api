class FriendsController < ApplicationController
  def index
    friends = Friend.all
    render json: friends.to_json(
      :include => {
      :user_friend => {except: [:created_at, :updated_at]},
      :user_friendy => {except: [:created_at, :updated_at]}
    })
  end
end
