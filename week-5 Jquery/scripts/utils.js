var urlOb={ criticalarea:"https://data.gov.in/node/87023/datastore/export/json",
            treecover:"https://data.gov.in/node/123108/datastore/export/json",
            watersources:"https://data.gov.in/node/87650/datastore/export/json"
          };                              /* object of url ...will be used to compare in transform and loadchart function for selecting
                                              data specific  functions
                                          */

function fetchData(url){                  // called in event.js file on click event

  $.getJSON(url,function(result){          // fetching data from json file and then on every success calling transform function
    $.each(transform(result,url));
  });
 }

function transform(obj,url){              // transform function decides which function to execute according to data coming from url
  console.log(url);

  if(url==urlOb.criticalarea){
  var plotData=  transformCritical(obj);    //transformation code for critical areas ...
  loadchart(plotData,url);
}else if(url==urlOb.treecover){
  var  plotData=  transformTreeCover(obj);  //transformation code for tree cover estimate ...
    loadchart(plotData,url);
  }else if (url==urlOb.watersources) {

  var  plotData=  transformWater(obj);      //transformation code for tree cover estimate ...
      loadchart(plotData,url);

  }
}

function loadchart(plotData,url){

  if(url==urlOb.criticalarea){
    loadchartCritical(plotData);          //chart creator function call for critical areas ...
  }else if(url==urlOb.treecover){
    loadchartTreeCover(plotData);         //chart creator function call for tree cover estimate ...
  }else if (url==urlOb.watersources) {
    loadchartWater(plotData);             // chart creator function call for Water Sources chart...
  }
}
