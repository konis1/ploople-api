class EventsController < ApplicationController
  def new
    categories = Type.all
    render json: categories
  end
end
