class ChangeKeysToIntAgain < ActiveRecord::Migration[7.0]
  def change
    change_column :friends, :user_friend, :integer
    change_column :friends, :user_friendy, :integer
  end
end
