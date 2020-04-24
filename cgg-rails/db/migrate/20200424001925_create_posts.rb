class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :post_name
      t.string :post_url
      t.integer :post_upvotes

      t.timestamps
    end
  end
end
