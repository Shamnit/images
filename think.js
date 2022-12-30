function clickOn(){
  console.log("Button clicked");
}
let btn = document.getElementById("btn");
btn.addEventListener('click',clickOn);

let elm= document.getElementById("intro");
let content=elm.innerHTML;
console.log(content);

//let apple=document.getElementById("list");
//let item= document.createElement("li");
//item.textContent="Mango";
//let pos= apple.firstElementChild;
//apple.insertBefore(item,pos);

let parent= document.getElementById("list");
let item= document.createElement("li");
item.textContent= "banana";
let chr= parent.firstElementChild;
parent.replaceChild(item,chr);
