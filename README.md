# 12-Employee-Tracker

Command-line based application for keeping track of employees, their managers, salaries, roles and departments.

## Installation

Clone the repo and run 

`
npm i
`

Create a file in the root directory called '.env' and enter only the following lines:

`
DB_USER='username'
DB_PW='password'
`
Open a mysql shell in the root directory and run the following:

`
source db\schema.sql
`

Optionally, you can run `source db\seeds.sql` to get a starter database going. 


The use the following to initiate the application:

`
node index.js
`


## Use

Make sure to know which role id you need before entering a new employee!

Please see [Video Demo](https://watch.screencastify.com/v/gjJ9b67E84Y9rdaxAoCx) for more information.

Use ctrl+c on Windows to Quit the application.

## Development

There is no manager table. All employees are on the employee table, and the manager_id is a foreign key referencing the primary key of employee (id). Using a manager table prooved redundant, and did not make nested hierarchies any less convoluted, so it was ultimately abandoned for one flat employee table, with all hierarchy encoded into the manager_id column.

## Collaboration

Please reach out at this email to collaborate: ddoherty6@gmail.com