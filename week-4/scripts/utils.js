var urlOb={ criticalarea:"https://data.gov.in/node/87023/datastore/export/json",
            treecover:"https://data.gov.in/node/123108/datastore/export/json",
            watersources:"https://data.gov.in/node/87650/datastore/export/json"
          };

function fetchData(url){
 // part-1 async function declaration returning promise obj
 return new Promise(function(resolve, reject){
   var xHR= new XMLHttpRequest();
   xHR.onreadystatechange=init;
   xHR.open('GET',url);
   xHR.send();
   function init(){
     if(xHR.readyState== 4){  
       if(xHR.status== 200){
     console.log("ready state =4");
     var jsondata= JSON.parse(xHR.responseText);
     // console.log(url);
     var obj={url:url,jsondata:jsondata};
       resolve(obj); // on success, call resolve method, to resolve

     }else{
       reject();// on error, call reject method, to reject
           }
     }
   }
 });
   //Returns Promise object
}

function transform(obj){
  console.log(obj.url);
   
  if(obj.url==urlOb.criticalarea){
  var plotData=  transformCritical(obj.jsondata);//transformation code for critical areas ...
   
  loadchart(plotData,obj.url);
}else if(obj.url==urlOb.treecover){
  var  plotData=  transformTreeCover(obj.jsondata);//transformation code for tree cover estimate ...
    loadchart(plotData,obj.url);
  }else if (obj.url==urlOb.watersources) {
     
  var  plotData=  transformWater(obj.jsondata);//transformation code for tree cover estimate ...
      loadchart(plotData,obj.url);

  }
}

function loadchart(plotData,url){
  if(url==urlOb.criticalarea){
    loadchartCritical(plotData);//loadchart code for critical areas ...
  }else if(url==urlOb.treecover){
    loadchartTreeCover(plotData);//loadchart code for tree cover estimate ...
  }else if (url==urlOb.watersources) {
    loadchartWater(plotData);
  }
}
//
// function handleResolve(jsondata,url){
//     transform(jsondata,url);
//
//       }
function handleReject() {
  console.log('error in handling promise') ;
}
