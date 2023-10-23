class ChangeKeysToBigintAgain < ActiveRecord::Migration[7.0]
  def change
    change_column :friends, :user_friend, :bigint
    change_column :friends, :user_friendy, :bigint
  end
end
