Rails.application.routes.draw do
  resources :greetings
  root 'messages#index'
end
