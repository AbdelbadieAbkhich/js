// question 1
// // methode 1
let par=document.getElementById("langages");
// par.insertAdjacentHTML("beforeend", "<li id='python'>Python</li>");
// methode2
let li=document.createElement("li");
li.textContent="python";
li.id="python";
par.appendChild(li);
// question 2