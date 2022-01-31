const inquirer = require('inquirer');
const { displayDepartments, addDepartment,
    displayRoles, addRole, 
    displayEmployees, getEmployeeNames, addEmployee, updateEmployeeRole } = require('./display.js');

const mainMenu = [
    {
        type: 'list',
        name: 'mainMenu',
        message: 'What do you want to do?',
        choices: ['View all departments', 'Add a department', 'View all roles', 'Add a role', 'View all employees', 'Add an employee', 'Update an employee role']
    }
];

const newDepartment = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the new department:',
        validate: input => {
            if(input) {
                return true;
            } else {
                return false;
            }
        }
    }
];
const newRole = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the new role:',
        validate: input => {
            if(input) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'salary',
        message: "Enter the new role's salary:",
        validate: input => {
            if(input) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'department_id',
        message: "Enter the new role's department id:",
        validate: input => {
            if(input) {
                return true;
            } else {
                return false;
            }
        }
    }
];

const newEmployee = [
    {
        type: 'input',
        name: 'first_name',
        message: "Enter the new employee's first name:",
        validate: input => {
            if(input) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'last_name',
        message: "Enter the new employee's last name:",
        validate: input => {
            if(input) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'role_id',
        message: "Enter the new employee's role id:",
        validate: input => {
            if(input) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'manager_id',
        message: "Enter the new employee's manager's id:",
        validate: input => {
            if(input) {
                return true;
            } else {
                return false;
            }
        }
    }
];

const defineEmployeeList = employeeNames => {
    const employeeList =[
        {
        type: 'list',
        name: 'id',
        message: "Which employee's role would you like to update?",
        choices: employeeNames
        }
    ];
    return employeeList;
}

const updateEmployee = [
    {
        type: "input",
        name: "role_id",
        message: "Please enter employee's new role ID:"
    }
]



const parseUserInput = async function(input) {
    if (input === 'View all departments') {
        displayDepartments();
        userInputStart();
        
    } else if (input === 'Add a department') {
        inquirer.prompt(newDepartment)
        .then(res => {
            addDepartment(res.name);
            userInputStart();
        });
    } else if (input === 'View all roles') {
        displayRoles();
        userInputStart();
    } else if (input === 'Add a role') {
        inquirer.prompt(newRole)
        .then(res => {
            console.log(res);
            const info = [res.name, res.salary, res.department_id];
            addRole(info);
            userInputStart();
        });
    } else if (input === 'View all employees') {
        displayEmployees();
        userInputStart();
    } else if (input === 'Add an employee') {
        inquirer.prompt(newEmployee)
        .then(res => {
            console.log(res);
            const info = [res.first_name, res.last_name, res.role_id, res.manager_id];
            addEmployee(info);
            userInputStart();
        });
    } else if (input === 'Update an employee role') {
        const employeeNamesObj = await getEmployeeNames();
        //console.log(employeeNamesObj);
        const employeeNames = employeeNamesObj[0];
        let names = Array();
        for (let i = 0; i < employeeNames.length; i++) {
            names.push(employeeNames[i].name);
            //selections.push(employeenames[i].id + " " + employeeNames[i].name);
        }
        //console.log(employeeNames);
        // console.log(names);
        //console.log(defineEmployeeList(names));
        
        inquirer.prompt(defineEmployeeList(employeeNames))
        .then(employee_id => {
            inquirer.prompt(updateEmployee)
            .then(role_id => {
                updateEmployeeRole([role_id, employee_id]);
                userInputStart();
            });
        });
    }

}

const userInputStart = function() {
    inquirer.prompt(mainMenu)
        .then(res => {
            parseUserInput(res.mainMenu);
        })
        .catch(err => console.log(err));
}

module.exports = userInputStart;