class CreateClips < ActiveRecord::Migration[6.0]
  def change
    create_table :clips do |t|
      t.string :clip_name
      t.string :clip_url
      t.integer :post_id

      t.timestamps
    end
  end
end
