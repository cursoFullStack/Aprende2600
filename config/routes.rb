Rails.application.routes.draw do
  get 'principal/index'
  root 'principal#index'
  get 'condiciones' => 'static_pages#condiciones'
  get 'privacidad' => 'static_pages#privacidad'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
