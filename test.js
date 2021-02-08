
var div = document.createElement("div");


console.log("1. Create the ");
var button1 = document.createElement("button");
button1.innerHTML = document.getElementsByClassName("Buttonlink")[0];

document.getElementsByClassName("ls-subnav1")[0].appendChild(div);
div.className = "buttonlink";
div.appendChild(button1);
div.id = "s_m_HeaderContent_subnavigator_ctl03";
console.log("2. Append somewhere");
// var body = document.getElementsByClassName("ls-subnav1")[0];
// button1.id = "s_m_HeaderContent_subnavigator_ctl03";


body.appendChild(button1);



console.log("3. Add event handler");
button1.addEventListener ("click", function() {
  console.log("did something");
});