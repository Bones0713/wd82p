let fruits = ["apple", "banana", "grapes", "orange", "strawberry"];

console.log(fruits);

// pop removes thes last item
// fruits.pop();
// console.log(fruits);
// shift removes the first item
// fruits.shift();
// console.log(fruits);

fruits.splice(2, 2);
console.log(fruits);

// push adding item at the end of an array
// unshift adding item at the beggining of an array
fruits.push("mango");
fruits.unshift("raspberry");
console.log(fruits);

const vegetables = ["tomato", "potato", "onion"];

const food = fruits.concat(vegetables);
console.log(food);

// loop

const motorBrand = ["honda", "yamaha", "kawasaki"];

//for (initialization; condition; iteration) {}
for (let i = 0; i < motorBrand.length; i++) {
  console.log(motorBrand[i]);
}

// motorBrand.forEach((motorBrand) => console.log(motorBrand));

// for (let motors of motorBrand) {
// console.log(motors);
// }
