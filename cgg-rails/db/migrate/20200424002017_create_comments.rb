class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :comment_text
      t.integer :comment_upvotes
      t.string :comment_username
      t.integer :comment_level
      t.integer :post_id
      t.integer :clip_id

      t.timestamps
    end
  end
end
