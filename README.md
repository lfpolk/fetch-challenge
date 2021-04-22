# Fetch-challenge

## Jump to
[About](#About)

[Routes](#Routes)

[Installation](#Installation)

## About
Server built with Node.js and express to create routes
Images in this README are from the software postman used to develop API


## Routes
# POST
/transactions

Adds transactions for a specific payer and date.
Calls insertTransaction to insert transaction in transaction array sorted by date

<img width="618" alt="Screen Shot 2021-04-22 at 4 52 25 PM" src="https://user-images.githubusercontent.com/47434013/115789685-22873500-a38b-11eb-9076-adb65b732b1c.png">


# PUT
/spend

Spends points, updates balances, and returns list of points spendt
Calls spendPoints, which goes through annd edits the transactions list dependinng onn nuber of points in each transaction
Calls groupItems to group transactions and only show total points spent for each payer

<img width="639" alt="Screen Shot 2021-04-22 at 4 53 17 PM" src="https://user-images.githubusercontent.com/47434013/115789753-3e8ad680-a38b-11eb-815f-77dfa098cf00.png">

returns

<img width="273" alt="Screen Shot 2021-04-22 at 4 53 51 PM" src="https://user-images.githubusercontent.com/47434013/115789801-55312d80-a38b-11eb-9202-826027705343.png">


# GET
/balance

Calls groupItems to get totals for each payer

GET http://localhost:5000/balance returns

<img width="215" alt="Screen Shot 2021-04-22 at 4 54 38 PM" src="https://user-images.githubusercontent.com/47434013/115789867-6ed27500-a38b-11eb-8b7c-780e8cc90700.png">



## Installation
#Prerequisites
Need Node.js/npm installed

Clone repository

To run, first install the following:

npm install express

npm install cors

cd server

start server by running with 'nodemon index' in server directory

Currently the app runs on http://localhost:5000, as defined in app.listen in index.js

