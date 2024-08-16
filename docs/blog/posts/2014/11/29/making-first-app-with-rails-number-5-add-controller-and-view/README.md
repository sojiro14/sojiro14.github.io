---
layout: Layout
title: "Ruby on Railsで初めてアプリを作ってみる #5 -controllerとviewの追加-"
slug: making-first-app-with-rails-number-5-add-controller-and-view
date: 2014-11-29
comments: true
categories: [Ruby on Rails]
---
生成したリソースに対応するcontrollerを作成し、このリソースに対するviewとそのためのアクションを追加していく。

## rails generate controller
controllerを作成する。controllerの名前は1文字目が大文字で、複数形を指定するのがrailsの規約である。

``` bash
$ rails g controller Stocks
# rails generateコマンドは rails g と省略できる
```

このコマンドでcontrollerのファイルとviewのファイルが生成される。

<!-- more -->

## routesの設定
railsでは ```config/routes``` ファイルにてdispatch管理をしている。このファイルの設定でRESTfulなURLを自動生成してくれる。

今回追加したcontrollerの設定も追加する。
 ```config/routes``` に以下の行を追加する

``` ruby
resources :stocks
```

この設定により、リソースの基本的な操作を行うURLが生成される。

この他にもroutesの設定方法はいくつかあり、それにより自由にエンドポイントの追加ができるがここでは省略。

## 設定されているroutesの確認
routesの設定が完了したら、生成されたURLの確認をする。

``` bash
$ rake routes
        Prefix Verb   URI Pattern                    Controller#Action
        stocks GET    /stocks(.:format)              stocks#index
               POST   /stocks(.:format)              stocks#create
     new_stock GET    /stocks/new(.:format)          stocks#new
    edit_stock GET    /stocks/:id/edit(.:format)     stocks#edit
         stock GET    /stocks/:id(.:format)          stocks#show
               PATCH  /stocks/:id(.:format)          stocks#update
               PUT    /stocks/:id(.:format)          stocks#update
               DELETE /stocks/:id(.:format)          stocks#destroy
```

## アクションの追加
 ```$ rake routes``` で示されたController#Actionに沿って、controllerにアクションを追加していく。

``` ruby 
app/controllers/stocks_controller.rb
class StocksController < ApplicationController
  before_action :set_stock, only: [:show, :edit, :update, :destroy]

  # GET /stocks
  # GET /stocks.json
  def index
    @stocks = Stock.all
  end

  # GET /stocks/1
  # GET /stocks/1.json
  def show
  end

  # GET /stocks/new
  def new
    @stock = Stock.new
  end

  # GET /stocks/1/edit
  def edit
  end

  # POST /stocks
  # POST /stocks.json
  def create
    @stock = Stock.new(stock_params)

    respond_to do |format|
      if @stock.save
        format.html { redirect_to @stock, notice: 'Stock was successfully created.' }
        format.json { render action: 'show', status: :created, location: @stock }
      else
        format.html { render action: 'new' }
        format.json { render json: @stock.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stocks/1
  # PATCH/PUT /stocks/1.json
  def update
    respond_to do |format|
      if @stock.update(stock_params)
        format.html { redirect_to @stock, notice: 'Stock was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @stock.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stocks/1
  # DELETE /stocks/1.json
  def destroy
    @stock.destroy
    respond_to do |format|
      format.html { redirect_to stocks_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stock
      @stock = Stock.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def stock_params
      params.require(:stock).permit(:title)
    end
end
```

## 参照
[ドットインストール](http://dotinstall.com/lessons/basic_rails_v2)
