
 //this is the transformation function for Critically polluted areas data coming...
function transformCritical(jsondata){

    var val1=[],val3=[],val4=[],val5=[];

    var data=jsondata.data;     // here we will be using array to store coming data and pass it's element to publish in charts

    var labl=jsondata.fields;
    for(var x =0;x<data.length;x++){
        val1.push(data[x][1]);

        val3.push(data[x][3]);
        val4.push(data[x][4]);
        val5.push(data[x][5]);
      }
       var value=[];
       value.push(labl[3].label);
       value.push(labl[4].label);

       value.push(labl[5].label);


       value.push(val1,val3,val4,val5);

      return value ;
}

function loadchartCritical(jdata){    // chart creating function for publishing chart from data received by above transformation function of critical polluted areas

var ctx= $('.mychart1');
var chart = new Chart(ctx, {
      type: 'bar',                   // The type of chart we want to create
    data: {                          // The data for our dataset
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
    // Configuration options go here.... i don't wanna specify any further options that's why left blank
      options: {}
});
}
