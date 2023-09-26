class TypesController < ApplicationController
  def index
    categories = Type.all
    render json: categories
  end
end
