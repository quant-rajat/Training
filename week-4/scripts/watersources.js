var pobj=fetchData(urlOb.watersources);
pobj.then(transform).catch(handleReject);

function transformWater(jsondata){

    var val1=[],val2=[],val3=[],val4=[],value=[];
    var jdata=jsondata.data;
    var jlabel=jsondata.fields;
        value.push(jlabel[1].label,jlabel[2].label,jlabel[3].label);

  for(x=0;x<jdata.length;x++){
      val1.push(jdata[x][0]);//location
      val2.push(jdata[x][1]);// percent of drinking water available
      val3.push(jdata[x][2]);//ground water sources percent
      val4.push(jdata[x][3]);//tap water sources percent
  }

  value.push(val1,val2,val3,val4);//adding all data to one array to return;
  return value;
}

function loadchartWater(jdata){

  console.log(jdata);
var ctx= document.querySelector('.mychart2').getContext("2d");
var chart = new Chart(ctx, {
      type: 'line',// The type of chart we want to create
    data: {         // The data for our dataset
        labels: jdata[3],
        datasets: [{
            label: jdata[0],
            // backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(100, 199,0)',
            data: jdata[4]
        },{
          label: jdata[1],
          // backgroundColor: 'rgb(155, 99, 132)',
          borderColor: 'rgb(200, 99, 132)',
          data: jdata[5]
        },{
          label: jdata[2],
          // backgroundColor: 'rgb(55, 99, 132)',
          borderColor: 'rgb(150, 199, 255)',
          data: jdata[6]
        }]
    },
    // Configuration options go here.... i don't wanna specify any further options that's why commented next line
  //  options: {}
});
}
