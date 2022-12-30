let btn1= document.getElementById("btn1");
let btn2= document.getElementById("btn2");
let btn3= document.getElementById("btn3");

let url= "https://www.google.com";
let url1= "https://www.yahoo.com";

let features = "height = 500,width=500";
let win;

btn1.addEventListener('click',function(){
    win= window.open(url,'google',features);
});
btn2.addEventListener('click',function(){
 window.open(url1,'google');
});
btn3.addEventListener('click',function(){
    win.close();
});


