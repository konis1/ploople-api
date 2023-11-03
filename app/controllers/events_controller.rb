class EventsController < ApplicationController
  skip_forgery_protection

def create
  @event = Event.new(params[:formData])
  @type = Type.find_by(name: params[:category])
  @event.type = @type
  @event.user = current_user
  if @event.save
    render json: @event
  else
    render json: @event.errors, status: :unprocessable_entity
  end
end

private

def event_params
  params.require(:event).permit(:date, :date, :comment, :friends)
end

end
