function transformTreeCover(jsndata){               // to transform the data coming for Tree cover estimatejson file

 jdata=jsndata.data;
 var val =[];
 for(var x=0;x<jdata.length; x++){
    val.push([jdata[x][0], jdata[x][3]]);         // selecting 1st element of data coming as label i.e. region name and 4th element as data to publish
 }
 return val;
}

function loadchartTreeCover(jsondata){              // to publish the Geo chart for Tree cover estimates statewise...

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
         region: 'IN',                               // It specifies the region of chart to India...
         resolution: 'provinces',                   //If you want to display provinces in India...
         backgroundColor: { fill:'transparent' },   // background color to fill while hovering over a region
         defaultColor: 'lightgreen',                // default color of the region

       };
     var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
     chart.draw(data, options);
   }
}
