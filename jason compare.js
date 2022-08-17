// JSON comparison

var object1={name:"person 1",age:25};
var object2={age: 25,name:"person 1"};
console.log(JSON.stringify(object1)===JSON.stringify(object2));

var object1={name:"person 1", age:30};
object1={name:"person 2", age:25};
console.log(JSON.stringify(object1)===JSON.stringify(object2));

// comparision

var object3 = { name:"person 1",age:25};
var object4 = { name:"person 1",age:25};
console.log(JSON.stringify(object3)===JSON.stringify(object4));

var object5 = { name:"person 1", age:30};
var object6 = { name:"person 1", age:30};
console.log(JSON.stringify(object5)===JSON.stringify(object6));
