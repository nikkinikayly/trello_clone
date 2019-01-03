class Api::CardsController < ApplicationController
    before_action :set_list
    before_action :set_card, only: [:show, :update, :destroy]
    
    def index
        render json: @list.cards.all
    end
    
    def show
        render json: @card
    end
    
    def create
        @card = @list.cards.new(card_params)
        if @card.save
        render json: @card
        else
        render json: @card.errors, status: 422
        end
    end
    
    def update
        if @card.update(card_params)
        render json: @card
        else
        render json: @card.errors, status: 422
        end
    end
    
    def destroy
        @card.destroy
    end
    
    private
        def set_list
            @list = List.find(params[:list_id])
        end
        def set_card
        @card = @list.cards.find(params[:id])
        end
    
        def card_params
        params.require(:card).permit(:name, :body)
        end
end
