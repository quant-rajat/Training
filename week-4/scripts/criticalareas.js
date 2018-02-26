// var urlcritical='https://data.gov.in/node/87023/datastore/export/json';


var pobj = fetchData(urlOb.criticalarea); //Promise returns here



pobj.then(transform).catch(handleReject);//Attaching success and error handler to promise
function transformCritical(jsondata){

    var val1=[],val3=[],val4=[],val5=[];
    console.log(jsondata);
    var data=jsondata.data;
  console.log(data);
    var labl=jsondata.fields;
    for(var x =0;x<data.length;x++){
        val1.push(data[x][1]);

        val3.push(data[x][3]);
        val4.push(data[x][4]);
        val5.push(data[x][5]);
      }
       console.log(labl[3].label);
       console.log(labl[4].label);
       console.log(labl[5].label);
       var value=[];
       value.push(labl[3].label);
       value.push(labl[4].label);

       value.push(labl[5].label);


       value.push(val1,val3,val4,val5);
      console.log(value);
      return value ;
}

function loadchartCritical(jdata){

  console.log(jdata);
var ctx= document.querySelector('.mychart1').getContext("2d");
var chart = new Chart(ctx, {
      type: 'bar',// The type of chart we want to create
    data: {         // The data for our dataset
        labels: jdata[3],
        datasets: [{
            label: jdata[0],
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(100, 199,0)',
            data: jdata[4]
        },{
          label: jdata[1],
          backgroundColor: 'rgb(155, 99, 132)',
          borderColor: 'rgb(200, 99, 132)',
          data: jdata[5]
        },{
          label: jdata[2],
          backgroundColor: 'rgb(55, 99, 132)',
          borderColor: 'rgb(150, 199, 32)',
          data: jdata[6]
        }]
    },
    // Configuration options go here.... i don't wanna specify any further options that's why commented next line
  //  options: {}
});
}
