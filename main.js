//revision for Es6 components
// template Literals

let name1 = "John";
let name2 = "Doe";

let fullName = `${name1} ${name2}`;
console.log(fullName);

//Ternary operator

//condition ? statement 1 : statement 2
//eg

const showRecipeOne = false;

function getRecipeOneName(recipeName) {
  return recipeName;
}
function getRecipeTwoName(recipeName) {
  return recipeName;
}

//old way --
if (showRecipeOne) {
  console.log(getRecipeOneName("pizza"));
} else {
  console.log(getRecipeTwoName("coke"));
}

//now ternary operation
showRecipeOne
  ? console.log(getRecipeOneName("pizza"))
  : console.log(getRecipeTwoName("coke"));

//destructuring
const id = 1;
const productName = "product Apple watch";
const rating = 5;

const product = {
  id,
  productName,
  rating,
};

console.log(product);

const product2 = {
  description: "product 2 description",
  id,
  productName,
  rating,
};
//destructuring --  i.e getting the description
const { description } = product2;
console.log(description);

//array destructuring
const array = [1, 2, 3, 4];
const [arrayValueOne] = array;

console.log(arrayValueOne);

// default parameters, spread and rest operators
//default operation
function multiplication(a = 1, b = 2) {
  return a * b;
}

console.log(multiplication(2, 4));

//spread ... expands
const array2 = [2, 3, 4, 5];
const array3 = [10, 12, 14, 15];
console.log([999, ...array2, ...array3]);

//rest operators  ...gathers
function logAll(first, ...rest) {
  console.log(first); // first item
  console.log(rest); // all the rest as an array
}

logAll(10, 20, 30, 40);
