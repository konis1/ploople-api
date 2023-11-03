class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :events
  has_many :invitations
  has_many :user_friend, class_name: 'Friend', foreign_key: 'user_friend_id'
  has_many :user_friendy, class_name: 'Friend', foreign_key: 'user_friendy_id'

  validates :email, :name, :nickname, presence: true
  validates :name, :nickname, length: {minimum: 2}
end
