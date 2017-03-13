//demo 3

// document.ontouchmove = function(event){
// 	event.preventDefault();
// }

// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// 	background('blue');
// }

// function draw(){
// 	for (var i = touches.length - 1; i >= 0; i--) {
// 		fill(255);
// 		stroke('red');
// 		ellipse(touches[i].x, touches[i].y, 200, 200);
// 	}


// }

// function touchEnded(){
// 	console.log("end");
// }


var dots =[];

//demo2

function setup() {
	createCanvas(1000, 1000);
	background(200, 190, 190);
	stroke(255);
}

function draw(){
	for (var i = 0; i < dots.length; i++) {
	 dots[i].display();
	}


}

// function touchStarted(){
// 	fill(255);
// 	ellipse(mouseX, mouseY, 80, 80);
// 	return false;
// }

function touchMoved() {
	var tmp = new dot();
	dots.push(tmp);
	socket.emit('drawing', tmp);
	return false;
}

function dot() {
	this.x = mouseX;
	this.y = mouseY;
	this.col = 'red';

	this.display = function() {
		//ellipse(this.x, this.y, this.size, this.size);
		stroke(this.col);
		strokeWeight(6);
		point(this.x, this.y);
	}
}
function fdot(x, y, c) {
	this.x = x;
	this.y = y;
	this.col = c;
	//this.size = random(15, 50);

	this.display = function() {
		//ellipse(this.x, this.y, this.size, this.size);
		stroke(this.col);
		strokeWeight(6);
		point(this.x, this.y);
	}
}
function drawOther(data){
	dots.push(new fdot(data.x, data.y, data.col));
}

function setWindow(data){
	background(200, 190, 190);
	dots = [];
	//background('pink');
}



// P5 STUFF

// bgcol = 'pink';

// function setup() {
// 	createCanvas(windowWidth, windowHeight);

// }

// function draw() {
// 	background(bgcol);

// }

// function touchStarted() {
// 	bgcol = 'green';
// 	return false;
// }

// function touchEnded() {
// 	bgcol = 'pink';
// 	console.log('end');
// 	return false;
// }




