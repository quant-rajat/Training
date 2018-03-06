$(document).ready(function(){

  var ch1= $("#chart1");                     // getting reference of elements of html
  var ch2= $("#chart2");
  var geo=$("#regions_div");
  var chartext= $("#textbeforechart");
  var el=$(".details");                       //getting reference array all 3 charts click div
  var geobottomtext=$("#geobottomtext");
  var geocharttext=$("#geocharttext");

  ch1.hide();                                 //setting display of charts div to none
  ch2.hide();
  geo.hide();
  geocharttext.hide();                        // hiding some texts related to charts
  geobottomtext.hide();                       // same as above...



  $.each(el,function(){
    $(this).click(function(){
      $("#startimg").hide();
      ch1.hide();   //setting visibility of charts div tag to hidden
      ch2.hide();

      geo.hide();
      geocharttext.hide();
      geobottomtext.hide();
      if(this.id=="criticalareasnav"){

        ch1.show();
        // console.log(ch1.height());
        chartext.html(" Critically Polluted Areas of India <br>");
        fetchData(urlOb.criticalarea);
      }
      else if (this.id=="waternav") {
        ch2.show();
        chartext.html(" Water Availability & Sources in different States of India<br>");
        fetchData(urlOb.watersources);

        }
      else {
        fetchData(urlOb.treecover);
        geo.show();
        geocharttext.show();
        chartext.html(" Tree Cover Estimate of Indian States & UT's on Year Basis. <br>");
        geobottomtext.show();
        }

      });
    });
});
