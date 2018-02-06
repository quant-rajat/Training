(function(){
  var xHR= new XMLHttpRequest();
xHR.onreadystatechange= init;
xHR.open('GET','https://api.myjson.com/bins/hern5');
xHR.send();
console.log(xHR);

function loadjson(callback){
  var jsondata= JSON.parse(xHR.responseText);
  console.log(jsondata);
  callback(jsondata);

}

function drawchart(){
  loadjson(function(jsondata){
  var data = google.visualization.arrayToDataTable(jsondata.Routine);
  // Optional; add a title and set the width and height of the chart
  var options = {'title':'daily task', 'width':550, 'height':400};
  // Display the chart inside the <div> element with their respective id's
  var chart1 = new google.visualization.PieChart(document.getElementById('d1'));
  var chart2 = new google.visualization.ColumnChart(document.getElementById('d2'));
  chart1.draw(data, options);
  chart2.draw(data,options);
});
}

function init(){
  if(xHR.readyState== 4){
    if(xHR.status== 200){
  console.log("ready state =4 ");
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawchart);

  }else{
    alert("ready state is not 4");
  }
}
}
})();
