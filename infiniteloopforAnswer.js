var stem2 = {
  classroom: "f103",
  students: 12
}
//object variable
var x = prompt("Classroom or Students?");
var lowercase = x.toLowerCase();
//set x to always be lowercase
if ((lowercase === "classroom") || (lowercase === "students")) {
//if you type classroom and students you will get the answer to it
  window.alert(stem2[lowercase]);
}
else {
//if user fails play fucntion to try again
tryAgain();
}

function tryAgain() {
//repeated code to tryagain
var x = prompt("Classroom or Students?");
var lowercase = x.toLowerCase();
if ((lowercase === "classroom") || (lowercase === "students")) {
  window.alert(stem2[lowercase]);
}
else {
tryAgain();
//Infinite loop to tryagain if you fail again
}
}