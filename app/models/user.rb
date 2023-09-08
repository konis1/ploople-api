class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :events
  has_many :invitations
  has_many :friends

  validates :email, :first_name, :last_name, :nickname, presence: true
  validates :first_name, :last_name, :nickname, length: {minimum: 2}
end
