class AddUserToFriends < ActiveRecord::Migration[7.0]
  def change
    remove_column :friends, :user_id, :bigint
  end
end
