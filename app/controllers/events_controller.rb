class EventsController < ApplicationController

def create
  @event = Event.new(params[:event])
  @event.save
end

private

def event_params
  params.require(:event).permit(:category, :date, :comment, :friends)
end

end
