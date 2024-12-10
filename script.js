// Write a program to Swap two Variables a and b (Swapping basically means interchanging)

// let a = 10;
// let b = 20;

// b = a+b-(a=b);

// Given a string , reverse the string and return the reverse string.

// let str = "ramudu"
// reverse(str)

// function reverse(str){
//     let revStr = "";
//     let i = str.length-1;
//     while(i>=0){
//         revStr += (str.charAt(i--));
//     }
//     console.log(revStr)
// }

// unshift,shift, push,pop,splice

let arr = [1, 2, 3, 8, 5, 6];
// arr.splice(1,2) // 1 4 5 6
// arr.pop() // For removing the last item
// arr.push(9) // For adding the element at last
// arr.shift() // Used for removing the item from first
// arr.unshift(5) // Used for adding the item at first
// console.log(arr)

// Write a js program to find the maximum element present in the array

// let max = arr[0];

// arr.forEach((ele)=>{
//     if(ele > max)max = ele;
// })

// console.log(max)

// Write a js program to find the second largest NUmber in the array

let max1, max2;
max1 = max2 = arr[0];

arr.forEach((ele) => {
  if (ele > max1) {
    max2 = max1;
    max1 = ele;
  } else if (ele > max2 || max1 == max2) {
    max2 = ele;
  }
});

// console.log(max1 +"   "+max2)

// balanced parenthesis problem of leetcode

var isValid = function (s) {
  const stack = [];
  for (let c of s) {
    if (c === "[" || c === "{" || c === "(") stack.push(c);
    if (c === "]" || c === "}" || c === ")") {
      if (stack.length === 0) return false;
      let top = stack.pop();
      if (
        (c === ")" && top !== "(") ||
        (c === "]" && top !== "[") ||
        (c === "}" && top !== "{")
      )
        return false;
    }
  }
  return stack.length === 0;
};
function pair(c1, c2) {
  if (c1 === "(" && c2 === ")") return true;
  else if (c1 === "[" && c2 === "]") return true;
  else if (c1 === "{" && c2 === "}") return true;
  return false;
}

//Objects in the javascript
let obj = {
  myName: "Alur Taher Basha",
  phoneNumber: 8499089094,
  Address: "H no 1/74, bharpet,Adoni",
};

// for(let ele in obj){
//     console.log(ele +":" +obj[ele])
// }

// Object inside the other Objects
let obj1 = {
  name: "John",
  age: 30,
  address: {
    street: "1/74,bharpet,Adoni",
    city: "New York",
    country: "USA",
  },
};

// console.log(obj1.address.street)

//Functions inside the Objects

let obj2 = {
  name: "Taher Basha",
  age: 23,
  abcd: () => {
    return "Hello from abcd function inside from the obj2";
  },
};

// console.log(obj2.abcd());


// Function to convert kelvin to celcius and vice versa

function convertTemp(temperatureValue, conversionUnit) {
  if (conversionUnit === "K") return temperatureValue + 273;

  return temperatureValue - 273;
}


// Functional constructor

function Person(firstName,lastName,sex,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;
    this.age = age;
    this.fullName = ()=>{
        console.log(this.firstName +" "+this.lastName);
    }
}

function eligibleOrNot(minAge){
    if(minAge >= 18){
        console.log("Eligible")
    }
    else{
        console.log("Not Eligible")
    }
}

const person1 = new Person("Taher", "Basha", 23, "M");
const person2 = new Person("Ali", "Raza", 2, "M");

person1.fullName()
person2.fullName();
eligibleOrNot(23)
eligibleOrNot(2)
