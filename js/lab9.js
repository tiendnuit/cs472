"use strict";
/* QUESTION 1
1.	Define a JavaScript object named, person, with the following specification:
    a.	Person object should have the properties:
        i.	name (initialize this with empty string value)
        ii.	dateOfBirth (initialize this with empty string value)
    b.	Person object should have the methods:
        i.	getName (should return the value of the person’s name property)
        ii.	setName (should take as input parameter, a String value which it sets as the person’s name) 

Given that someone named John IS-A person, applying JavaScript inheritance 
and the Object.create(…) method, create an object named, john, 
whose name property is set to the string, “John” 
and whose dateOfBirth property is set to the date, December 10, 1998.

Print-out to the console, the information about the person named John, in the following format:
“The person’s name is John”
“John was born on 1998-12-10”
*/

class Person {
    //a. initialize name and dateOfBirth with empty string value
    constructor() {
        this.name = "";
        this.dateOfBirth = "";
    }

    //b. get/set methods
    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getDateOfBirth() {
        return this.dateOfBirth;
    }

    setDateOfBirth(value) {
        this.dateOfBirth = value;
    }

    //Print with format
    toString() {
        let dateStr = new Date(this.getDateOfBirth()  + " UTC").toISOString().slice(0,10);
        return `"The person's name is ${this.getName()}"\n"${this.getName()} was born on ${dateStr}"`;
    }
}
//Output example:
console.log("=================== QUESTION 1 ================================");
let john = new Person();
john.setName("John");
john.setDateOfBirth("December 10, 1998");
console.log(`${john}`);

/* QUESTION 2
2.	Given that an Employee IS-A person, applying JavaScript inheritance and the Object.create(…) method, 
create a generic object named, employee, with the following properties:
    a.	Salary (initialize this with the value zero dollars
    b.	hireDate (initialize this with the current date of today)
        and the following method:
    c.	doJob (should take as input parameter, a string representing the jobTitle of the employee and it prints-out to the console, 
    the employee’s information in the following format:
    
    “[Employee’s name] is a [jobTitle] who earns $[salary]”
    e.g. Anna is a Programmer who earns $249,995.50 

Create an employee named, Anna, set their salary to $249.995.50 and call the doJob() method, passing it the jobtitle, Programmer.
*/

class Employee extends Person {
    constructor() {
        super();
        this.salary = 0;
        this.hireDate = new Date();
    }

    setSalary(value) {
        this.salary = value;
    }

    getSalary() {
        return this.salary;
    }

    setHireDate(value) {
        this.hireDate = value;
    }

    getHireDate() {
        return this.hireDate;
    }

    doJob(jobTitle) {
        console.log(`${this.getName()} is a ${jobTitle} who earns $${this.salary.toCommaFormatString()}`);
    }
}

//Format number with comma
Number.prototype.toCommaFormatString = function() {
    return this.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

//Output example:
console.log("=================== QUESTION 2 ================================");
let anna = new Employee();
anna.setName("Anna");
anna.setSalary(249995.50);
anna.doJob("Programmer");

/* QUESTION 3
3.	Re-write the person object specification described in Question 1 above, 
but this time, using a Constructor Function named, Person. 
Then, add a method named, toString() to the person object, 
which return the string representation of the person object data in the format:

    {Name: John, DateOfBirth: 1998-12-10}

Using your constructor function for the person object, 
create a person named, Peter, whose date of birth is November 10, 1985.

Print-out to the console, the information for the person named, Peter, 
using its toString() method

*/
class Person2 {
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    toString() {
        let dateStr = new Date(this.dateOfBirth + " UTC").toISOString().slice(0,10);
        return `{Name: ${this.name}, DateOfBirth: ${dateStr}}`;
    }
}

//Output example:
console.log("=================== QUESTION 3 ================================");
let peter = new Person2("Peter", "November 10, 1985");
console.log(peter.toString());

/*
4.	Refer to your work on Lab Assignment 4. Add Javascript and JQuery code to work with your 2 HTML forms as follows:

    a.	Login Form: Add code such that when the Form is submitted by clicking on the Submit button, 
    the values entered in the input fields are printed to the Console. Do this using mostly JQuery API. 
    Note: Prevent the form submission operation from doing a post-back/page reload.

    b.	New Product Form: Add code such that when the form is submitted by a click on the Submit button, 
    the values entered in the input fields are displayed in a <div> block that appears below of the form. 
    Note: Prevent the form submission operation from doing a post-back/page reload.      
*/