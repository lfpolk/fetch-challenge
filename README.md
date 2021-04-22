# Fetch-challenge

## Jump to
[About](#About)
[Routes](#Routes)
[Installation](#Installation)
## About
App built with Node.js backend and React.js frontend


## Routes
# POST
/transactions
Adds transactions for a specific payer and date.
Calls insertTransaction to insert transaction in transaction array sorted by date

# PUT
/spend
Spends points, updates balances, and returns list of points spendt
Calls spendPoints, which goes through annd edits the transactions list dependinng onn nuber of points in each transaction
Calls groupItems to group transactions and only show total points spent for each payer

# GET
/balance
Calls groupItems to get totals for each payer

## Installation
#Prerequisites
Need Node.js/npm installed

To run, first install the following: 
npm install express
npm install cors


start server by running with 'nodemon index' in server directory
