class CreateUserClips < ActiveRecord::Migration[6.0]
  def change
    create_table :user_clips do |t|
      t.string :post_name
      t.string :post_url
      t.integer :post_upvotes

      t.timestamps
    end
  end
end
