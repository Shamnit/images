

let btn = document.getElementById("btn");
btn.addEventListener('click', function () {
  console.log("Button Click");
});

let elm = document.getElementById("intro");
let content = elm.innerHTML;
console.log(content);

window.addEventListener('keydown', checkKey);
function checkKey(e) {
  console.log(e.key);
}
window.addEventListener('wheel', function (e) {
  if (e.deltaY < 0)
    console.log("Scroll up");
  else if (e.deltaY > 0)
    console.log("Scroll down");
});


window.addEventListener('scroll', function () {
  if (window.pageYOffset > 250) {
    document.body.style.background = "red";
  }
  else {
    document.body.style.background = "blue";
  }
});