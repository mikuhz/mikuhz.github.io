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
var sec = 0; 
var min = 0; 
var hr = 0;  
var tmil = 0; 
var rect1 = document.getElementById("rect1");
var circ = document.getElementById("circ");
var circ2 = document.getElementById("circ2");
var circ3 = document.getElementById("circ3");
var xpos; 
var ypos;
var LargeFill;
var SmallFill;
var LargeOut;
var SmallOut;
var LargeRad = 40;
var SmallRad = 20;
var wkposx = 112;
var wkposy = 60;  
var dayposx = 108;
var dayposy = 128;
//var mon = 39; 
//var tue = 73;
//var wed = 112;
//var thu = 145;
//var fri = 181;
//var sat = 210;
//var c = document.getElementById("myCanvas2");
//var ctx = c.getContext("2d");

    var monthPictures;
    monthPictures = [
        "url('January.jpg')",
        "url('February.jpg')",
        "url('March.jpg')",
        "url('April.jpg')",
        "url('May.jpg')",
        "url('June.jpg')",
        "url('July.jpg')",
        "url('August.jpg')",
        "url('September.jpg')",
        "url('October.jpg')",
        "url('November.jpg')",
        "url('December.jpg')"];


function CircleStuff(){

var today = new Date();
var second1 = today.getSeconds();
var milli = today.getMilliseconds();
var hour1 = today.getHours();
var minute1 = today.getMinutes();
var millis = today.getTime(); 
var month = today.getMonth(); 
var day = today.getDay();
var daymonth = today.getDate();
var date = today.getDate();
var year = today.getFullYear();
//day = 0;
var dayweek = [0,39,73,112,145,181,216];
var calcol = [0,39,73,112,145,181,215];
var calrow = [0,39,73,112,145,181];
var monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var monthImage = document.getElementById("monthImage");

var alldaysy = [-20,-20,-20,-20,-20,-20,-20,14,14,14,14,14,14,14,49,49,49,49,49,49,49,84,84,84,84,84,84,84,128,128,128,128,128,128,128,128 ];
var alldaysx = [107,76,41,0,-35,-72,-107,107,76,41,0,-35,-72,-107,107,76,41,0,-35,-72,-107,107,76,41,0,-35,-72,-107,107,76,41,0,-35,-72,-107,107,76];

timemilli = milli + (second1*1000) + (minute1*60*1000); // + (hour1*60*60*1000) ; 
hour = timemilli/3600; 

tmil =  milli + sec*1000; // + (sec*1000) ;//+ (min*60*1000)+ (hr*60*60*1000) ;
//rect1.setAttribute("width", second1*5);
//rect1.setAttribute("x", 100*Math.cos(2*3.14159*2000*count3) + 400);
//rect1.setAttribute("y", 100*Math.sin(2*3.14159*2000*count3) + 400);
//month = 3; 
//day = 1;
if(month == 0){
    ypos = 441;
    xpos = 1133;
}
if(month == 1){
    offset = 3;
    ypos = 441;
    xpos = 499;
    dayposx = alldaysx[0+offset];
    dayposy = alldaysy[0+offset];
}
if(month == 2){
    offset = 3; 
    ypos = 442;
    xpos = 1062;
    LargeFill = "#D6B06E";
    SmallFill = "#C70039";   
    LargeOut = "#BA3D3A";
    SmallOut = "#BA3D3A";
    wkposy = 54;
    dayposy = 119;
    dayposx = alldaysx[0+offset];
    dayposy = alldaysy[0+offset];
}
if(month == 3){
    offset = 6; 
    ypos = 441;
    xpos = 400;
    LargeFill = "#9CBB6E";
    SmallFill = "green";   
    LargeOut = "#558D04";
    SmallOut = "#558D04";
    dayposx = alldaysx[29+offset];
    dayposy = alldaysy[29+offset]; //119;
}

if(month == 4){
    offset = 1;
    ypos = 441;
    xpos = 417;
    LargeFill = "#C70039";
    SmallFill = "green";   
    LargeOut = "#558D04";
    SmallOut = "#558D04";
    wkposy = 54;
    dayposx = alldaysx[daymonth + offset-1];
    dayposy = alldaysy[daymonth + offset-1]; //119;
}

if(month == 5){
    ypos = 441;
    xpos = 1168;
    LargeFill = "#F7B652";
    SmallFill = "#90A8BA";   
    LargeOut = "#CE870C";
    SmallOut = "#CE870C";
    wkposy = 54;
   // dayposx = 114; 
    dayposy = 119;
}

if(month == 6){
    ypos = 441;
    xpos = 475;
    LargeFill = "#F7B652";
    SmallFill = "#90A8BA";   
    LargeOut = "#CE870C";
    SmallOut = "#CE870C";
    wkposy = 49;
    dayposx = 110; 
    dayposy = 125;
}

if(month == 7){
    ypos = 441;
    xpos = 1086;
    LargeFill = "#F7B652";
    SmallFill = "#90A8BA";   
    LargeOut = "#CE870C";
    SmallOut = "#CE870C";
    wkposy = 49;
    dayposx = 108; 
    dayposy = 110;
}

if(month == 8){
    ypos = 513;
    xpos = 1134;
    LargeFill = "#F7B652";
    SmallFill = "#90A8BA";   
    LargeOut = "#CE870C";
    SmallOut = "#CE870C";
    wkposy = 62;
    dayposx = 114; 
    dayposy = 110;
}

if(month == 9){
    ypos = 441;
    xpos = 1086;
    LargeFill = "#F7B652";
    SmallFill = "#90A8BA";   
    LargeOut = "#CE870C";
    SmallOut = "#CE870C";
    dayposx = 114; 
    dayposy = 55;
}

if(month == 10){
    ypos = 441;
    xpos = 1118;
    LargeFill = "#F7B652";
    SmallFill = "#90A8BA";   
    LargeOut = "#CE870C";
    SmallOut = "#CE870C";
    dayposx = 114; 
    dayposy = 55;
}

if(month == 11){
    ypos = 441;
    xpos = 426;
    LargeFill = "#F7B652";
    SmallFill = "#90A8BA";   
    LargeOut = "#CE870C";
    SmallOut = "#CE870C";
    dayposx = 114; 
    dayposy = 55;
}

circ.setAttribute("fill", LargeFill);
circ.setAttribute("stroke", LargeOut);
//circ.setAttribute("r", LargeRad);
circ.setAttribute("cy", 244*Math.cos(2*3.14159*20*timemilli) + ypos);
circ.setAttribute("cx", 244*Math.sin(2*3.14159*20*timemilli) + xpos);

circ2.setAttribute("fill", SmallFill);
circ2.setAttribute("stroke", SmallOut);
//circ.setAttribute("r", SmallRad);
circ2.setAttribute("cy", 195*Math.cos(2*3.14159*1180*timemilli) + ypos);
circ2.setAttribute("cx", 195*Math.sin(2*3.14159*1180*timemilli) + xpos);

circ3.setAttribute("cy", ypos - wkposy);
circ3.setAttribute("cx", xpos - wkposx + dayweek[day]);

circ4.setAttribute("cy", ypos + dayposy); 
circ4.setAttribute("cx", xpos - dayposx); 

/*circ5.setAttribute("cy", ypos); 
circ5.setAttribute("cx", xpos + 214); 

circ6.setAttribute("cy", ypos + 214); 
circ6.setAttribute("cx", xpos); 

circ7.setAttribute("cy", ypos - 214); 
circ7.setAttribute("cx", xpos); 

circ8.setAttribute("cy", ypos); 
circ8.setAttribute("cx", xpos - 214); */

bodyprop.style.backgroundImage = monthPictures[month];
//bodyprop.innerHTML = monthsOfTheYear[month];

    if(milli >= 900){
    	sec = sec + 1; 
    }
    if(sec == 60){
    	min = min + 1;
    }
    if(min == 60){
    	hr = hr + 1;
    }

    var a = Math.cos(3.14159*tmil);
	var b = Math.sin(2*3.14159*tmil);

    var x = tmil +"<br>" + milli + "<br>" + a + "<br>" + b;
    //document.getElementById("demo").innerHTML = x;

////////////////////////////////////////////////////////////////////////
    if(minute1 < 10){
        minute1 = "0"+minute1;
    }

    if(second1 <10){
        second1 = "0"+second1;
    }

    if(twelveHour ==true){

        clockMeridiem.style.display = "inline-block";

        if(hour1>11){
            clockMeridiem.innerHTML= "pm";
        }else{
            clockMeridiem.innerHTML = "am";
        }
    }else{
        clockMeridiem.style.display = "none";

    }

    if(twelveHour==true){
        if(hour1>12){
            hour1=hour1-12;
        }
    }

    if(twelveHour==true){
        if(hour1==0){
            hour1=12;
        }
    }

    var red = hour1*11.08695652173913;
    red = Math.round(red);

    var green = minute1*4.32203389830508;
    green=Math.round(green);

    var blue = second1*4.32203389830508;
    blue = Math.round(blue);


    /*if(twelveHour == true){
        if(hour > 12){
            hour = hour - 12;
        }


    }*/

//single = sign assigns value. A double = sign shows equivalency

    //jsClock.style.color = "rgb(" + hour + "," + minute + "," + second +")";
    //jsClock.style.color = "rgb(" + 255 + "," + 0 + "," + 0 +")";
    //jsClock.style.color = "rgb(" + hour x 11.08695652173913 + "," + minute + "," + second +")";

    jsClock.style.color = "rgb(" + red + "," + green + "," + blue +")";
    //jsClock.style.fontSize = second + "px";
    //document.body.backgroundImage = "url(" + myPictureArray[minute] + ")";

    clockHour.innerHTML = hour1;
    clockMinute.innerHTML = minute1;
    clockSecond.innerHTML = second1;

    clockDay.innerHTML = daysOfTheWeek[day];
    clockMonth.innerHTML = monthsOfTheYear[month];
   clockDate.innerHTML = date;
   clockYear.innerHTML = year;
    backclr = !backclr; 

//////////////////////////////////////////////////////////////////////////////////////////






}


setInterval(CircleStuff, 10);

function switchTo12(){
    twelveHour = true;
}

function switchTo24(){
    twelveHour = false; 
}




