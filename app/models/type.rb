class Type < ApplicationRecord
  has_many :events

  validates :name, :description, presence: true
  validates :name, length: {minimum: 2}
  validates :description, length: {minimum:2}
end
