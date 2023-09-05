class Event < ApplicationRecord
  belongs_to :type
  belongs_to :user
end
