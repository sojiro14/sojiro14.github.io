---
layout: post
title: "note of devise and omniauth-facebook"
date: 2015-07-14 03:03:31 +0900
comments: true
categories: 
---


$ vim Gemfile
gem 'devise'
gem 'omniauth-facebook'

$ bundle install


```
$ rails g devise:install
      create  config/initializers/devise.rb
      create  config/locales/devise.en.yml
===============================================================================

Some setup you must do manually if you haven't yet:

  1. Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:

       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

     In production, :host should be set to the actual host of your application.

  2. Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"

  3. Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>

  4. If you are deploying on Heroku with Rails 3.2 only, you may want to set:

       config.assets.initialize_on_precompile = false

     On config/application.rb forcing your application to not access the DB
     or load models when precompiling your assets.

  5. You can copy Devise views (for customization) to your app by running:

       rails g devise:views

===============================================================================
```

```
$ rails g devise user
      invoke  active_record
      create    db/migrate/20150713180603_devise_create_users.rb
      create    app/models/user.rb
      invoke    test_unit
      create      test/models/user_test.rb
      create      test/fixtures/users.yml
      insert    app/models/user.rb
       route  devise_for :users
```

```
$ bundle exec rake db:create --trace
```

```
$ rake db:migrate
== 20150713180603 DeviseCreateUsers: migrating ================================
-- create_table(:users)
   -> 0.0308s
-- add_index(:users, :email, {:unique=>true})
   -> 0.0362s
-- add_index(:users, :reset_password_token, {:unique=>true})
   -> 0.0274s
== 20150713180603 DeviseCreateUsers: migrated (0.0946s) =======================
```


```
```

$ bundle install

$ rails g migration AddColumnsToUsers provider uid

rake db:migrate

