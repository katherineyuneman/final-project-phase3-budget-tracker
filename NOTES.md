# Overview
Budget tracking app where user sets a monetary budget each month for each different category available (pre-made and also can add a new category).  The user can add new transactions that will include what they spent and in which category.  The amount they spent will be subtracted from the total amount and they will get alerted if they are over the category budget or the total budget.

# Features
* Home page
* User login / signup
* Way to create new budget
* Tie budget to a month (current month will be default)
* Way to view past months’ budgets and transactions
* Display how much money is left in budget (if over or under)
* Create new spending categories (rent, groceries, etc.)
* Create new transactions to be added to a months’ spending & subtracted from budget
* Delete transactions
* Edit transactions after they’ve been created
* Page to view list of transactions per month
* Add bar chart of spending per month

# MVP
* User login / signup
* Create overall budget & tie to a month
* Create categories
* Create / delete transaction attached to budget
* View list of transactions with filter for month
* Show current month and how much of budget is left

# Stretch Goals
* Edit transactions
* Individual budget for each category
* Bar chart to show spending habits (some sort of library for this maybe?)




### Models
User
---
has_many :budgets

email
first_name
last_name


Budget
---
has_many :transactions
belongs_to :user

Amount
month
user_id


Transaction
---
belongs to :budget

description
amount
date_added
category_id
budget_id


Category
---
belongs to :transaction

description

### Routes

GET /budgets (for sending back all budgets) x
POST /budgets (for creating a new budget)
DELETE /budgets (for deleting a budget)

GET /budgets/transactions (for sending back all transaction)
POST /budgets/transactions (for creating a new transaction)
DELETE /budgets/transactions (for deleting a new transaction)

GET /budgets/transactions/:id 








