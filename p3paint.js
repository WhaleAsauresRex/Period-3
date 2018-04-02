var vw = window.innerWidth; //sets max width as var vw
var vh = window.innerHeight; // sets max height as vr vh

var Brush = [1, 5, 10]; //stores values for brush sizes

var Mode = ['Paint', 'Clear All']; //Sets the drop down which we will be using to apply a Switch Case to.

var picker = '#000000'; // Default color of the brush
var gui; // Telling the browser that it has GUI

function setup() {
  createCanvas(vw, vh); //Set canvas as max height and width
  background('white'); //Set background canvas as white
  stroke(0, 50); //??
  gui = createGui('BOXBOX', 0,0); // Create GUI box and label it the position X and Y.
  gui.addGlobals('Color','Mode','Brush'); //Adds elements to the Menu Box
}

function draw() {
  if (mouseIsPressed) {
    //when user presses mouse button
    strokeWeight(Brush); //Sets line width as var Brush value
    Stroke(color(picker)); // Sets the color as picker value
    line(mouseX, mouseY); //Set the line point as X and Y of the mouse
    
  }
}
