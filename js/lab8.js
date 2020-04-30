/*
    QUESTION 6
    Consider the following definition of an add() function to increment a counter variable
 */
const Count = (function () {
    let counter = 0;
    const _add = function() {
        counter++;
    };
    const _reset = function() {
        counter = 0;
    };
    
    return {
        add : _add,
        reset : _reset,
        value : function() {
            return counter;
        },
        make_adder : (num) => {
            return () => {
                let count = 0;
                while (count < num) {
                    count++;
                    _add();
                }
            }
        }
    };
})();

Count.add();
Count.add();
console.log(Count.value());
Count.reset();
console.log(Count.value());


/*
    QUESTION 8
    The add() function defined in question 6 always adds 1 to the counter each time it is called. 
    Write a definition of a function make_adder(inc), 
    whose return value is an add function with increment value inc (instead of 1). 
    There are 2 solutions:
        1. define make_adder directly in Count object
        2. define make_adder as an extension function of Count object
 */
// Solution 1
let add5 = Count.make_adder(5);
add5();
add5();
add5();
console.log(Count.value());

//Reset
Count.reset();

// Solution 2
Count.make_adder2 = function(num) {
    return () => {
        let index = 0;
        while (index < num) {
            index++;
            Count.add();
        }
    }
}

const make_adder = Count.make_adder2;
let add7 = make_adder(7);
add7();
add7();
add7();

console.log(Count.value());

/*
    QUESTION 10
    Using the Revealing Module Pattern, write a JS definition of a Module 
    that creates an Employee Object with the following fields and methods:
 */
let Employee = (() => {
    let name = "";
    let age = 0;
    let salary = 0;

    const setAge = (newAge) => age = newAge;
    const setSalary = (newSalary) => salary = newSalary;
    const setName = (newName) => name = newName;
    const getAge = () => { return age };
    const getSalary = () => { return salary };
    const getName = () => {return name}
    return {
        setAge : setAge,
        setSalary : setSalary,
        setName : setName,
        increaseSalary : (percentage) => setSalary((1 + percentage)*getSalary()),
        incrementAge : () => setAge(getAge() + 1),
        getInfos: () => { return `Name: ${getName()} - Age: ${getAge()} - Salary: ${getSalary()}`}
    };
})();

Employee.setName("Anna");
Employee.setAge(25);
Employee.setSalary(50000);
console.log(`Employee: ${Employee.getInfos()}`);

Employee.increaseSalary(0.2);
Employee.incrementAge();
console.log(`Employee: ${Employee.getInfos()}`);

/*
    QUESTION 11
    Write a few JS instructions to extend the Module of Question 10 
    to have a public address field and public methods setAddress(newAddress) and getAddress()
 */
Employee = ((obj) => {
    let address = "";
    obj.setAddress = (newAddr) => {
        address = newAddr;
    }
    obj.getAddress = () => { return address };
    
    return obj;
})(Employee)

Employee.setAddress("Fairfield, IOWA");
console.log(`Employee: ${Employee.getInfos()}`);
console.log(`Address: ${Employee.getAddress()}`);
