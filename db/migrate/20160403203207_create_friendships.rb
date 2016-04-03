class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.boolean :accepted, default: false

      t.timestamps
    end

    add_index :friendships, [:user_id, :friend_id], unique: true
  end
end
