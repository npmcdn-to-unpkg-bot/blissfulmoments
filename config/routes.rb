Rails.application.routes.draw do

  	root 'static_pages#home'
  
	get 	'home',       	to: 'static_pages#home',        	as: 'home'
	get     'about',      	to: 'static_pages#about',       	as: 'about'
	get     'investment',	to: 'static_pages#investment',		as: 'investment'
	get     'studio', 	  	to: 'static_pages#studio',  		as: 'studio'
	get     'clients',      to: 'static_pages#clients',			as: 'clients'
	get		'gallery',		to: 'photos#index',					as: 'gallery'

end
