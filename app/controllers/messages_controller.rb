class MessagesController < ApplicationController
  def index
    # @messages random message from the database
    @message = Message.all.sample
    render json: @message
  end

  def new
  end

  def create
 
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
