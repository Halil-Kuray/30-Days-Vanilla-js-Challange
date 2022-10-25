const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
const p = document.querySelector('p');


// Regular
console.log("Hello");

// Interpolated
console.log("Hello i am a string", "©");

// Styled
console.log("%c i am some great text", 'font-size:40px;  color:red');

// warning!
console.warn("this is not preffered");

// Error :|
console.error("you did a mistake");
console.error("%c you did a mistake", "font-size:20px; color:blue");

// Info
console.info("crocodiles eat 4-5 people per year");

// Testing
console.assert(1 === 1,  "That is wrong")
console.assert(1 === 4,  "That is wrong")

// clearing
console.clear()
// this will clear the console. it can be used at and of a code block or js file

// Viewing DOM Elements
console.log(p); 
console.dir(p); //to see all methods and properties

// Grouping together
dogs.forEach(dog => {
    
    console.group(dog.name) // groupCollapsed
    console.log(`this is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years old`)
    console.groupEnd(dog.name)

})

// counting
console.count("wes") // how many time is that used ? count it
console.count("wes")
console.count("alex")
console.count("alex")
console.count("alex")
console.count("wes")
console.count("wes")
console.count("wes")
console.count("alex")
console.count("alex")

// timing

console.time("fetching data"); //time and timeEnd must have same string 

fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
    .then(data => data.json())
    .then(data => {

     console.timeEnd("fetching data")
     console.log(data);
    });

console.table(dogs) // wiew the object as a table
