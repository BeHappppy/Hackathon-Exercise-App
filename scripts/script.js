function validateLogin() {
	var userName=document.forms["loginForm"]["username"].value;
	var passWord=document.forms["loginForm"]["password"].value;

	if (userName==="admin"&&passWord==="password123")
	{
		return true;
	}
	else
	{
		alert("Enter valid username or password");
		return false;
	}
}

function validateRegister(){
	var userName=document.forms["registerForm"]["username"].value;
	var password1=document.forms["registerForm"]["pwd"].value;
	var password2=document.forms["registerForm"]["confirm"].value;

	if(username===""||password1===""||password2==="")
	{
		alert("Please fill out all fields");
		return false;
	}
	else if(password1!==password2)
	{
		alert("Passwords must match");
		return false;
	}
	else
	{
		return true;
	}
}

var i=0;
var workouts=Array();
var amounts=Array();

function addWorkouts()
{
		workouts[i]=document.getElementById("workout-type").value;
		amounts[i]=document.getElementById("workout-number").value;

		if(workouts[i]===""||amounts[i]==="")
		{
			alert("Enter valid workout and number of reps");
		}
		else
		{
			var x="<hr/>";
			for (var j=0;j<workouts.length;j++)
			{
				x+=workouts[j]+" "+amounts[j]+"x"+"<br/>";
			}
			document.getElementById("workout-list").innerHTML=x;
			i++;
			document.getElementById("workout-type").value = "";
			document.getElementById("workout-number").value="";
		}
}

var xPos =[]; // repersents the day (nov 2, nov 3, nov 4)
var yPos =[]; // repersents how many workouts they completed that day (place holder untill checkmarks for workout are complete)
var progressDot = 5; //how big the dots are

function setup() {
  createCanvas(screen.availWidth, 210); //202
}

//draw the graph and points
function draw() {
  graph();

  //temp for visual
  for(var i = 0; i < 7; i++) {
    xPos.push(20 + i * (screen.availWidth/6.3));
    yPos.push(random(10, 200));

    stroke(181, 105, 219);
    ellipse(xPos[i], yPos[i], progressDot, progressDot);
  }
  
  //connecting the progress dots
  for(var i =0; i <6; i++) {
    strokeWeight(3);
    line(xPos[i], yPos[i], xPos[i+1], yPos[i+1])
  }
}

//base set up for the graph
function graph () {
  //box of the graph
  stroke(240, 220, 87);
  strokeWeight(3);
  fill(249, 250, 240);
  rect(20, 5, screen.availWidth - 60, 200);

  //line of the goal
  stroke(230, 203, 25);
  strokeWeight(5);
  line(20, 5, screen.availWidth - 40, 5);
}
