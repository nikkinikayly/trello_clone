Rails.application.routes.draw do
  namespace :api do
    resources :boards do
      resources :lists
    end
  end

  namespace :api do
    resources :lists do
      resources :cards
    end
end
