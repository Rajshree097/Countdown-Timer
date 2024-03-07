const endDate="9 March 2024 01:00 PM";
document.getElementById("endDate").innerText=endDate;
function clock(){
    const inputs=document.querySelectorAll("input");
    const end= new Date(endDate);
    const now=new Date();
  const difference= (end-now)/1000;
  //calculating days.
  inputs[0].value=(Math.floor(difference/3600/24));
  //calculating hours
 inputs[1].value=Math.floor(difference/3600)%24;
 //calculating minutes
 inputs[2].value=Math.floor(difference/60)%60;
 //calculating seconds
 inputs[3].value=Math.floor(difference)%60;
 
}
//initial call
clock()
setInterval(clock,1000);

