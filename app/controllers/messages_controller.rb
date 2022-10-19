class MessagesController < ApplicationController
  def index
    @messages = Message.all
    render json: @messages
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      render json: @message
    else
      render json: @message.errors
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
    def message_params
      params.require(:message).permit(:greeting)
    end
end
