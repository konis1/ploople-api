class EventsController < ApplicationController
  skip_forgery_protection

  def create
    @event = Event.new(event_params)
    @type = Type.find_by(name: params[:category])
    @event.type = @type
    @event.user = User.find_by(name: "Anthony Christodoulou")
    params[:friends].each do |friend|
      invitation = Invitation.new(pending_invitation: true, accepted_invitation: false)
      invitation.user = User.find_by(name: friend)
      invitation.event = @event
      invitation.save
    end
    if @event.save
      render json: params
    else
      render json: @event.error
    end
  end

  private

  def event_params
    params.require(:event).permit(:date_start, :date_end, :comment)
  end

end
