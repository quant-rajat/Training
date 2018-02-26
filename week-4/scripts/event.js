var ch1= document.getElementById("chart1"); // getting reference of elements of html
var ch2= document.getElementById("chart2");
var geo=document.getElementById('regions_div');
var chartext= document.getElementById('textbeforechart');
var el=document.querySelectorAll('.details'); //getting reference array of all 4 charts div
var geobottomtext=document.getElementById('geobottomtext');
var geocharttext=document.getElementById('geocharttext');
for(var x=0;x<el.length;x++){
  el[x].addEventListener('click',function(){
    startimg.style.display="none";
  ch1.style.visibility="hidden";    //setting visibility of charts div tag to hidden
  ch2.style.visibility="hidden";

  geo.style.visibility="hidden";
  geocharttext.style.visibility="hidden";
  geobottomtext.style.visibility="hidden";
  if(this.id=="criticalareasnav"){

        ch1.style.visibility="visible";
        chartext.innerHTML=" Critically Polluted Areas of India <br>"
      }
      else if (this.id=="waternav") {
       ch2.style.visibility="visible";
       chartext.innerHTML=" Water Availability & Sources in different States of India<br>"
        }
      else {
        geo.style.visibility="visible";
        geocharttext.style.visibility="visible";
	chartext.innerHTML=" Tree Cover Estimate of Indian States & UT's on Year Basis. <br>";
        geobottomtext.style.visibility="visible";
        }
    });
  }
