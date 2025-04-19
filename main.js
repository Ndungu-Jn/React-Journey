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
