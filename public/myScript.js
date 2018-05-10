var button = document.getElementById("button");
var display = document.getElementById("info");
button.addEventListener('click', goGetTheInfo);

//fake info from client to client
function goGetTheInfo() {


  var request = new XMLHttpRequest();
  request.addEventListener('load', showInfo);

  //using an old API key from Google but not authorized for this particular API
  //request.open("GET","https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDolYjfMtVYXhBmeIBDOoBNxKNbxgUU_yk"); //I'm going to code my server

  //darnit. No CORS support from Wunderground
  //request.open("GET", "http://api.wunderground.com/api/acf368b0ac48425d/conditions/q/CT/Westport.json");
  //request.open("GET","http://tv.csapp.westport.k12.ct.us/api/schedule/2017/03/30");
  //Fine! We will send a request to our own server and have it go get the data from external server
  //Our server will play "middle man" here. Data coming back from it will not raise Cross Origin flag
  request.open("GET", "/staples_tv_minion");
  request.send();
}

function showInfo() {
  display.innerHTML = this.responseText;
}
