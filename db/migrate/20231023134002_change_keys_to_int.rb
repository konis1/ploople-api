class ChangeKeysToInt < ActiveRecord::Migration[7.0]
  def change
    change_column :friends, :user_friend, :int
    change_column :friends, :user_friendy, :int
  end
end
