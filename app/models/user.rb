class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :events
  has_many :invitations
  has_many :user_friend, class_name: 'Friend', foreign_key: 'user_friend_id'
  has_many :user_friendy, class_name: 'Friend', foreign_key: 'user_friendy_id'

  validates :email, :first_name, :last_name, :nickname, presence: true
  validates :first_name, :last_name, :nickname, length: {minimum: 2}
end
