Rails.application.routes.draw do
  get 'messages/index'
  get 'messages/new'
  get 'messages/create'
  get 'messages/show'
  get 'messages/edit'
  get 'messages/update'
  get 'messages/destroy'
  get 'root/index'
  root 'root#index'
end
