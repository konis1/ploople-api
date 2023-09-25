Rails.application.routes.draw do
  scope '/api/version1' do
    resources :events, only: [:new]
    devise_for :users
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
