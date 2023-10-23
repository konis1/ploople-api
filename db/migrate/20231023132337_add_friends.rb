class AddFriends < ActiveRecord::Migration[7.0]
  def change
    add_column :friends, :user_friend, :bigint
    add_column :friends, :user_friendy, :bigint
    add_foreign_key :friends, :users, column: :user_friend
    add_foreign_key :friends, :users, column: :user_friendy
  end
end
