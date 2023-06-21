//Time
setInterval(function(){
  let t=new Date();
  let h=t.getHours();
  let m=t.getMinutes();
  let s=t.getSeconds();
  let ap=(h>=12)? "pm" : "am";
  if(h>12){
    h=h-12;
  }
  if(h==00){
    h="12";
  }
  if(h.toString().length==1){
    h="0"+h;
  }
  if(m.toString().length==1){
    m="0"+m;
  }
   if(s.toString().length==1){
    s="0"+s;
  }
  document.getElementById("time").innerHTML=h+" : "+m+" : "+s+"   "+ap;
},1000)

//Date
setInterval(function(){
  let t=new Date();
  let day=['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let d=day[t.getDay()];
  let da=t.getDate();
  let ma=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let m=ma[t.getMonth()];
  let y=t.getFullYear();
  if(da.toString().length==1){
    da="0"+da;
  }
  document.getElementById("date").innerHTML=da+"  "+m+",  "+d+"  "+y;
},1000)