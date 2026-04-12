// // console.log(document.body.children[1].querySelector("h2").textContent);
// let h=document.querySelectorAll("h2");
// // for (i=0;i<=h.length;i++){
// //     console.log(h[i]);
// // }
// console.log(h[1].textContent);
// // question 2
// let par=document.getElementById("nouvelles");
// console.log(par.tagName)
// console.log("le contenu de " +par.tagName+" c'est : "+par.textContent);
// // // question 3
// // let H=document.querySelectorAll("h2");
// // for(i=0;i<=H.length;i++){
// //     console.log(H[i].textContent);
// // }
// // question 4
// let p=document.querySelectorAll("p");
// for(i=0;i<=p.length;i++){
//     console.log(p[i]);
// }
// // question 5
// let li =document.getElementById("nouvelles").querySelectorAll("li");
// for(i=0;i<=li.length;i++){
//     console.log(li[i]);
// }
// // question 6
// let b=document.querySelectorAll(".merveilles");
// for(i=0;i<=b.length;i++){
//     console.log(b[i].tagName);
// }
// question 7
let div=document.getElementById("contenu");
let pa=div.querySelectorAll("p");
console.log(pa[0].textContent);
console.log(pa[pa.length - 1].textContent);
