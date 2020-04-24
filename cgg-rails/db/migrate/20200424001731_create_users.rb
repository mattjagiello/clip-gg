class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :e-mail
      t.string :password_digest
      t.string :twitch_id

      t.timestamps
    end
  end
end
