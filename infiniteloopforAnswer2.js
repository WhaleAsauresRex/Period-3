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
for(i=1;i<3;i++){
//for loop to play the loop a certain amount of times
var x = prompt("Classroom or Students?");
var lowercase = x.toLowerCase();
//set x to always be lowercase
if ((lowercase === "classroom") || (lowercase === "students")) {
//if you type classroom and students you will get the answer to it
  window.alert(stem2[lowercase]);
i = 3;
//without setting the i to 3 then it will run infinite because u didnt end it
}
else {
	window.alert("You tried "+i+" times")
  //displays the amount of tried you were given
}
}
}