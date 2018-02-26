// var urltreecover='https://data.gov.in/node/123108/datastore/export/json';

var pobj = fetchData(urlOb.treecover); //Part 2- Outside Async function



pobj.then(transform).catch(handleReject);//Attaching success and error handler to promise

function transformTreeCover(jsndata){
 // to transform the data from json file we need a function called transform as follows...
 jdata=jsndata.data;
 var val =[];
 for(var x=0;x<jdata.length; x++){
       val.push([jdata[x][0], jdata[x][3]]);
 }

 return val;
}

function loadchartTreeCover(jsondata){

console.log(jsondata);
    google.charts.load('current', {
      'packages':['geochart'],
      // Note: we will need to get a mapsApiKey for our project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(drawRegionsMap);
    function drawRegionsMap() {
   var data = google.visualization.arrayToDataTable(jsondata);
    var options = {
         region: 'IN', // India
         resolution: 'provinces', //If you want to display provinces in India
         colorAxis: {colors: ['red', 'blue']}, //If you want specific color for your markers (cities)
         backgroundColor: { fill:'transparent' },
         defaultColor: 'lightgreen',
       //  displayMode: 'text'
       };
     var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
     chart.draw(data, options);
   }
}
