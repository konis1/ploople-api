# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Type.destroy_all
Friend.destroy_all

puts "adding users test@test.fr"

User.create(first_name: "Anthony", last_name: "Christodoulou", nickname: "konis1", email: "antho@test.fr", password: "123456")
User.create(first_name: "Niki", last_name: "Ioannou", nickname: "Victoria", email: "niki@test.fr", password: "123456")
User.create(first_name: "Anna", last_name: "Chipont", nickname: "caca", email: "anna@test.fr", password: "123456")

puts "creating categories";
Type.create(name:"Beers", image: ActionController::Base.helpers.image_url("Beers.jpg"),  description: "Let's go for beers")
Type.create(name:"Wine", image: ActionController::Base.helpers.image_url("wine.jpg"), description:"Let's go for Wine")
Type.create(name:"Club", image: ActionController::Base.helpers.image_url("clubbing.jpg"), description:"Let's go for hard tech")
Type.create(name:"Concert", image: ActionController::Base.helpers.image_url("concert.jpg"), description:"Let's go for a concert")
Type.create(name:"Kinks", image: ActionController::Base.helpers.image_url("shibari.jpg"), description:"Let's go for Kinks")
Type.create(name:"Running", image: ActionController::Base.helpers.image_url("running.jpg"), description:"Let's go for running")
Type.create(name:"Chill", image: ActionController::Base.helpers.image_url("chill.jpg"), description:"Let's chill at home")

puts "Creating friendships"
antho = User.find_by first_name:'Anthony'
niki = User.find_by first_name:'Niki'
anna = User.find_by first_name:'Anna'
Friend.create(pending_invite:false, user_friend:antho, user_friendy: niki)
Friend.create(pending_invite:false, user_friend:antho, user_friendy: anna )
