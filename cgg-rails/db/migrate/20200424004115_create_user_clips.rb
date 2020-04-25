class CreateUserClips < ActiveRecord::Migration[6.0]
  def change
    create_table :user_clips do |t|
      t.integer :user_id
      t.integer :clip_id
      t.timestamps
    end
  end
end
