let firstName = 'John';
const myAge = 30;

const person = {
    name: 'Jane', 
    age: 25
};

const { name, age } = person;
const numbers = [1, 2, 3];
const[first, second] = numbers;

const greeting = `Hello, ${name}`;

function greet(name = 'Guest') {
    return `Hello, ${name}!`
}

const add = (a, b) => a + b;

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const obj1 = {name: 'John'};
const obj2 = {...obj1, age: 30};

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

const user = { name: 'John'};
const guestName = user.name || 'Guest';

const isAdmin = user.isAdmin && 'Admin';

const johnsName = 'John';
const thirtysixage = 36;
const objectPerson = { johnsName, thirtysixage};

const nestedUser = {
    name: 'John', 
    address: {
        city: 'New York'
    }
};

const city = user.address?.city;

const numbersUptoFive = [1, 2, 3, 4, 5];
const doubled = numbersUptoFive.map(num => num * 2);
const evens = numbers.filter(num => num % 2 == 0);
const sumTotals = numbers.reduce((total, num) => total + num, 0);

fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error('Error:', error);
    }
}

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this.args), delay);
    };
}
  
  window.addEventListener('resize', debounce(() => {
    console.log('Resized');
  }, 300));


  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  window.addEventListener('scroll', throttle(() => {
    console.log('Scrolled');
  }, 300));

const numbersTillFive = [1, 2, 3, 4, 5];
for(const number of numbers) {
    console.log(number);
}

const original = { name: 'John', age: 30};
const clone = { ...original };
const arr = [1, 2, 3];
const arrClone = [...arr];

const propName = 'age';
const personProps = {
    name : ' John', 
    [propName]: 30
}

setTimeout(() => {
    console.log('This runs every 3 seconds');
}, 3000);
clearInterval(intervalId);

const str = 'Hello, World';
console.log(str.includes('world'));
console.log(str.startsWith('Hello'));
console.log(str.endsWith('!'));

console.log('Simple Log');
console.warn('This is a warn');
console.error('This is an error');
console.table([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]);
console.group('Group');
console.log('Message 1');
console.log('Message 1');
console.groupEnd();
