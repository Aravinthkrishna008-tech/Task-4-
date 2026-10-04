1.
function Hello() {
    console.log("Hello Everyone");    
}
Hello()

2.
function welcome() {
    console.log("Welcome to Javascript");
    
}
 welcome()

 3.
 function Navi() {
    console.log("Krishnabharathi");
    
 }
Navi()

4.
function message() {
    console.log("Hi");    
    console.log("Hello");
    console.log("Welcome");
}
message();

5.
function numbers() {
    for (let i = 0; i <=5; i++) {
        console.log(i);
        
    }
}
numbers()

6.
function check() {
    let num = 10
    if (num > 1) {
        console.log("True");
     
    }
        
    }
check()

7.
function details(params) {
    console.log("Name : Krishnabharathi");
    console.log("Qualification : Bsc");
    console.log("Role : Developer");
}
details()

8.
function Comapny(params) {
    console.log("Comapny Name : Stackly");
    
}
Comapny()

9.
function WelcomeUser(params) {
    console.log("WelcomeUser");
    console.log("WelcomeUser");
    console.log("WelcomeUser");
}
WelcomeUser()

10.
function a(params) {
    console.log("Hi");
}
a()

function b(params) {
    console.log("Hello");    
}
b()

11.
function c(a) {
    console.log(a);
}
c("10")

12.
function d(A,B) {
    console.log(A);
    console.log(B);
}
d("10","20")

13.
function add(a,b) {
    console.log(a + b);
}
add(10,20)

14.
function sub(a,b) {
    console.log(a - b);
    
}
sub(30,20)

15.
function multiply(a,b) {
    console.log(a*b); 
}
multiply(10,4)

16.
function divide(a,b) {
    console.log(a/b);
    
}
divide(10,2)

17.
function student(name,age) {
    console.log("Name :",name);
    console.log("Age :", age);        
}
student("Krishnabharathi","25")

18.
function employee(name, role, salary){
    console.log("Name :", name);
    console.log("Role :", role);
    console.log("Salary :", salary);    
}
employee("Krishnabharathi","Developer","25000")

19.
function details(name, age, qualification, role) {
    console.log("Name :",name);
    console.log("Age :",age);
    console.log("Qualification :",qualification);
    console.log("Role :",role);
}

details("Krishnabharathi", 25, "B.Sc", "Developer");

20.
function details(name, age, qualification, role, city, salary) {
    console.log("Name :",name);
    console.log("Age :",age);
    console.log("Qualification :",qualification);
    console.log("Role :",role);
    console.log("City :", city);
    console.log("Salary :", salary);
    
}

details("Krishnabharathi", 25, "B.Sc", "Developer", "Tirupur", "25000");

21.
function student(name, department="Bsc", cgpa){
    console.log("Name:",name);
    console.log("Department:",department);
    console.log("CGPA:",cgpa);
}
student("Krishnabharathi", undefined, "8.5")

22.
function user(name, age = 18){
    console.log(name);
    console.log(age);
    
}
user("Krishna")

23.
function employee(name, role = "Developer"){
    console.log(name);
}
employee("Krishna")

24.
function form(name, department, cgpa, disability = "no") {
    console.log("Name :", name);
    console.log("Department :", department);
    console.log("CGPA :", cgpa);
    console.log("Disability :", disability);        
}
form("Krishna", "Bsc", "9",)
form("Priya", "CSE", "8.5")

25.
function bc(name, age, city = "Tirupur") {
    console.log("Name :", name);
    console.log("Age :", age);
    console.log("City :", city);
       
}
bc("Krishna", "25")

26.
function numbers(a,b) {
    return(a+b)    
}
let result = numbers(10,20)
console.log(result);

27.
function numbers0(a,b) {
    return(a-b)    
}
let result1 = numbers0(30,20)
console.log(result1);

28.
function numbers1(a,b) {
    return(a*b)
}
let result2 = numbers1("10", "2")
console.log(result2);

29.
function numbers2(a,b) {
    return(a/b)
}
let result3 = numbers2("10", "2")
console.log(result3);

30.
function salary() {
    return(40000)
}
let amount = salary();
console.log(amount);

31.
function salary1(amount) {
    return (amount)
}

let employeeSalary = salary1(45000);
console.log(employeeSalary);

32.
function name1() {
    return("Krishna")
}
let result4 = name1()
console.log("Person's Name :",result4);

33.
function score(marks) {
    if (marks >= 35) {
        return("pass")
    } else {
        return("Fail")
    }
}
let result5 = score("55")
console.log(result5);

34.
function offer(price, discount) {
    return (price * discount) /100
}

let discountValue = offer(3000, 10);
console.log(discountValue);

35.
function number6(a,b) {
    return (a+b)
}
function cd() {
    let result6 = number6(10,55)
    console.log(result6);
    
}
cd()

36.
let e = "Hello"

function outerside() {
    console.log(e);
    
}
outerside()

37.
let object = {
    name: "Krishna",
    designation : "Developer"
}
function outersideobj() {
    console.log("Name :", object.name);
    console.log("Designation :", object.designation);
}
outersideobj()

38.
let salary2 = 40000
function bonus(a) {
    let finalsalary = (a + salary2);
    console.log(finalsalary);
}
bonus(5000)
    
39.
let object1 = {
    name : "Krishna",
    city  : "Tirupur",
    experience : "2 Years",
}
function employeedetails() {
    console.log("Employee Name :", object1.name);
    console.log("Employee City :", object1.city);
    console.log("Employee Experience :", object1.experience);
}
employeedetails()

40.
let message5 = "Hi, Hello";

function function1() {
    console.log(message5);
}
function function2() {
    console.log(message5);
}
function1();
function2();

41.
function named(params) {
    console.log(params);
    
}
named("Named Function")

42.
let anonymous = function (params) {
    console.log(params);
    
}
anonymous("anonymous function")

43.
let arrow = (parameter)=>{
    console.log(parameter);   
}
arrow("Arrow Function")

44.
let addition = (a, b) => {
    return (a + b);
}
console.log(addition(5, 10)); 

45.
function addNumbers(a, b) {
    return (a + b)
}
let addAnonymous = function(a, b) {
    return (a - b)
}
let addArrow = (a, b) => {
    return (a * b)
}
console.log(addNumbers(10, 20));
console.log(addAnonymous(20, 5));
console.log(addArrow(10, 20));

46.

(function hello() {
    console.log("Hello JavaScript");
})();

47.

(function (name) {
    console.log("Hello " + name);
})("Krishna");

48.

(function (product, discount) {
  console.log(`Offer: Get ${discount}% off on ${product}!`);
})("Mobilephone", "20");


49.

function add(callback, num1, num2) {
    let sum = num1 + num2;
    callback(sum, num1, num2);
}
function displayResult(result, num1, num2) {
    console.log(`${num1} + ${num2} = ${result}`);
}
add(displayResult, 10, 20);

50.

function add(a, b, callback) {
    let result = a + b;
    console.log("Addition:", result);

    callback(a, b);
}
function sub(a, b) {
    console.log("Subtraction:", a - b);
}
add(10, 5, sub);
