class CreateFriends < ActiveRecord::Migration[7.0]
  def change
    create_table :friends do |t|
      t.boolean :pending_invite
      t.references :user_friend, null: false
      t.references :user_friendy, null: false

      t.timestamps
    end
  end
end
