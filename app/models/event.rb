class Event < ApplicationRecord
  belongs_to :type
  belongs_to :user
  has_many :invitations
  # validates :date_start, :date_end, presence: true
  # validates :date_start, :date_end, format: {with: /^(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/, message: "Date should be in DD/MM/YYYY format"}
end
