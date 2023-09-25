# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Type.destroy_all

puts "adding users test@test.fr"

user = User.new(email: "test@test.fr", password: "123456")
user.save

puts "user Test added with password 123456"

Type.create(name:"Beers", description:"Let's go for beers")
Type.create(name:"Wine", description:"Let's go for Wine")
Type.create(name:"Club", description:"Let's go for hard tech")
Type.create(name:"Concert", description:"Let's go for a concert")
Type.create(name:"Kinks", description:"Let's go for Kinks")
Type.create(name:"Running", description:"Let's go for running")
Type.create(name:"Chill", description:"Let's chill at home")
