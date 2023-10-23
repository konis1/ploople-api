class Friend < ApplicationRecord
  belongs_to :user_friend, class_name: 'User'
  belongs_to :user_friendy, class_name: 'User'
end
