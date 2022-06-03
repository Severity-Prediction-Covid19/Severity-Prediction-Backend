# Severity Prediction Backend (Sure Health) By C22-PS273 Capstone Project Bangkit 2022 #

## General Info ##
This is the backend repository for Severity Prediction Covid-19 (Sure Health) For CRUD using RESTFul API   
See the documentation for use REST Api [[Documentation]](https://docs.google.com/document/d/1lgMf5lgHlq-UpZ-6WFn3StMGmeiJxWa5EM8t38wtrM8/edit?usp=sharing)

## Technologies ##
Project is created with:
* Node version: V16.1.0
* NPM version: V8.10.0
* Google Cloud SQL: MySQL 8.0
* Google App Engine

## Create Google Cloud SQL (MySQL)
1. Create and Setup your Cloud Sql
2. Open Folder Database 
3. Import db.sql to Cloud Sql

## Deploy To GCP ##
Follow the Step to run on GCP, Using NPM

``` bash
# clone your repository 
$ git clone https://github.com/Severity-Prediction-Covid19/Severity-Prediction-Backend.git

# go to into app's directory
$ cd Severity-Prediction-Backend
```

> Configuration Database
```
- Rename .env.ex to .env
- Change configuration with your database (this app using MySQL) : 
DB_HOST=<YOUR_DATABASE_LOCALHOST>
DB_PORT=<YOUR_DATABASE_PORT>
DB_USER=<YOUR_DATABASE_USER>
DB_PASS=<YOUR_DATABASE_PASSWORD>
DB_NAME=<YOUR_DATABASE_NAME>
PORT=<YOUR_PORT>
```

> Configuration Node Module
```
# Install the dependencies in node_modules folder
npm install

# Run backend 
npm start
```

> Deploy backend to Google Cloud App Engine
```
# Initialize your SDK
gcloud init

# Deploy to Google Cloud App Engine
gcloud app deploy
```
