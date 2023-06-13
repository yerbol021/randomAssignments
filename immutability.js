//Objects
const object = {
  key: "Value of Key",
};

const copyOfObject = object;
object.key2 = "Value of New Key";
console.log(object);
console.log(copyOfObject);

//Arrays
const arrayOfNumbers = [1, 2, 3, 4, 5];

const copyArrayOfNumbers = arrayOfNumbers;

const arrayOfNumbersNew = arrayOfNumbers.push(10);

console.log("arrayOfNumbers: ", arrayOfNumbers);
console.log("copyArrayOfNumbers: ",copyArrayOfNumbers);
console.log("arrayOfNumbersNew: ", arrayOfNumbersNew);