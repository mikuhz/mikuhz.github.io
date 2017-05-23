var twelveHour = true;

var clockHour = document.getElementById("hour");
var clockMinute = document.getElementById("minute");
var clockSecond = document.getElementById("second");
var clockMeridiem = document.getElementById("meridiem");

//alert('first four');

var clockDay = document.getElementById("weekday");
var clockMonth = document.getElementById("month");
var clockDate = document.getElementById("date");
var clockYear = document.getElementById("year");
var bodyprop = document.getElementById("bodystuff");
var jsClock = document.getElementById("clock");

var backclr = true;
var count = 1; 
var opac = 0; 
var brighter = true; 
var count2 = 1; 
var count3 = 0; 
var time = 0; 

var rect1 = document.getElementById("rect1");
var circ = document.getElementById("circ");
var circ2 = document.getElementById("circ2");
//var c = document.getElementById("myCanvas2");
//var ctx = c.getContext("2d");

function CircleStuff(){

var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
var today = new Date();
var second1 = today.getSeconds();
var milli = today.getMilliseconds();
var hour1 = today.getHours();
var minute1 = today.getMinutes();

timemilli = milli + (second1*1000) + (minute1*60*1000) + (hour1*60*60*1000); 
 //c.style.left = 100x;
 //c.style.top = 100px;
ctx.lineWidth=10;
ctx.strokeStyle='blue';
ctx.beginPath();
ctx.arc(200,150,100,0,.06283*count2);
ctx.stroke();

ctx.lineWidth=10;
ctx.strokeStyle='red';
ctx.beginPath();
ctx.arc(200,150,140,0,.06283*count2);
ctx.stroke();

ctx.lineWidth=10;
ctx.strokeStyle='green';
ctx.beginPath();
ctx.arc(200,150,60,0,.06283*count2);
ctx.stroke();

rect1.setAttribute("width", second1*5);
rect1.setAttribute("x", 100*Math.cos(2*3.14159*2000*count3) + 200);
rect1.setAttribute("y", 100*Math.sin(2*3.14159*2000*count3) + 200);
circ.setAttribute("cx", 100*Math.cos(2*3.14159*100*timemilli) + 200);
circ.setAttribute("cy", 100*Math.sin(2*3.14159*100*timemilli) + 200);
circ2.setAttribute("cy", 100*Math.cos(2*3.14159*1000*timemilli) + 200);
circ2.setAttribute("cx", 100*Math.sin(2*3.14159*1000*timemilli) + 200);


	if (count2<100){
	count2 = count2+1;
	}
	else{
		count2 = 1; 
		ctx.clearRect(0, 0, myCanvas2.width, myCanvas2.height);
	}
	count3 = count3+1; 

	if (milli = 999){
		time = time + 999;
	}
}
//alert('After Variables');

//changeTime();

function changeTime(){
	
	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	
	var day = today.getDay();
	var month = today.getMonth();
	var date = today.getDate();
	var year = today.getFullYear();
	var bodyprop = document.getElementById("bodystuff");
    bodyprop.style.background = "powderblue";

    /*if(backclr == true){
    	bodyprop.style.background = "powderblue";
    }else{
    	bodyprop.style.background = "green";
    }*/

/*ctx.lineWidth=10;
ctx.strokeStyle='blue';
ctx.beginPath();
ctx.arc(200,150,100,0.06283*count,2*Math.PI);
ctx.stroke();*/

/*ctx.lineWidth=10;
ctx.strokeStyle='red';
ctx.beginPath();
ctx.arc(200,150,150,0.06283*count,2*Math.PI);
ctx.stroke();

ctx.lineWidth=10;
ctx.strokeStyle='green';
ctx.beginPath();
ctx.arc(200,150,50,0,2*Math.PI);
ctx.stroke();*/


if (brighter == true){
    if(count < 100){
    	opac = count*0.01; 
    	bodyprop.style.background = "rgba("+"176,224,230"+","+opac+")"; 
    	count = count+1; 
    }
    if(count == 100){
    	bodyprop.style.background = "rgba(176,224,230,1)";
    	count = count-1; 
    	brighter = false; 
    }
}

else if(brighter == false){
    if(count > 0){
    	opac = count*0.01; 
    	bodyprop.style.background = "rgba("+"176,224,230"+","+opac+")";   
    	count = count-1;   	
    }
    if(count==0){
   		bodyprop.style.background = "rgba(176,224,230,0)";  
    	count = count + 1; 
        brighter = true;   	
    }
}
	var daysOfTheWeek = [
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	];

	var monthsOfTheYear = [
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	];


	if(minute < 10){
		minute = "0"+minute;
	}

	if(second <10){
		second = "0"+second;
	}

	if(twelveHour ==true){

		clockMeridiem.style.display = "inline-block";

		if(hour>11){
			clockMeridiem.innerHTML= "pm";
		}else{
			clockMeridiem.innerHTML = "am";
		}
	}else{
		clockMeridiem.style.display = "none";

	}

	if(twelveHour==true){
		if(hour>12){
			hour=hour-12;
		}
	}

	var red = hour*11.08695652173913;
	red = Math.round(red);

	var green = minute*4.32203389830508;
	green=Math.round(green);

	var blue = second*4.32203389830508;
	blue = Math.round(blue);


	if(twelveHour == true){
		if(hour > 12){
			hour = hour - 12;
		}


	}

//single = sign assigns value. A double = sign shows equivalency

	//jsClock.style.color = "rgb(" + hour + "," + minute + "," + second +")";
	//jsClock.style.color = "rgb(" + 255 + "," + 0 + "," + 0 +")";
	//jsClock.style.color = "rgb(" + hour x 11.08695652173913 + "," + minute + "," + second +")";

	jsClock.style.color = "rgb(" + red + "," + green + "," + blue +")";
	//jsClock.style.fontSize = second + "px";
	//document.body.backgroundImage = "url(" + myPictureArray[minute] + ")";

	clockHour.innerHTML = hour;
	clockMinute.innerHTML = minute;
	clockSecond.innerHTML = second;

	clockDay.innerHTML = daysOfTheWeek[day];
	clockMonth.innerHTML = monthsOfTheYear[month];
	clockDate.innerHTML = date;
	clockYear.innerHTML = year;
	backclr = !backclr; 

    //count = count + 1; 
}


changeTime();

//setInterval(changeTime, 10);
setInterval(CircleStuff, 1);

function switchTo12(){
	twelveHour = true;
}

function switchTo24(){
	twelveHour = false; 
}





