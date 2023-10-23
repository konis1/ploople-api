class AddForeignKeyToFriends < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :friends, :users, column: :user_friend_id
    add_foreign_key :friends, :users, column: :user_friendy_id
  end
end
