class ApplicationController < ActionController::Base

  before_action :configure_permitted_parameters, if: :devise_controller?
  protect_from_forgery with: :exception

  def after_sign_in_path_for(resource)
      new_event_path
  end
  
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys:[:email, :password])
  end
  
end
