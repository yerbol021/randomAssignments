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


//Objects
const object2 = {
  key: "Value of Key",
};

const copyOfObject2 = { ...object2 };
object2.key2 = "smth new";
console.log("object2: ", object2);
console.log("copyOfObject2: ", copyOfObject2);


//Arrays
const arrayOfNumbers2 = [1, 2, 3, 4, 5];

const copyArrayOfNumbers2 = [...arrayOfNumbers2];

arrayOfNumbers2.push(999);

console.log("arrayOfNumbers2: ", arrayOfNumbers2);
console.log("copyArrayOfNumbers2: ",copyArrayOfNumbers2);

