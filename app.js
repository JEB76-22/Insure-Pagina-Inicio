const abrir = document.getElementById("abrir");
// console.log(abrir)
const cerrar = document.getElementById("cerrar");
// console.log(cerrar)

const links = document.getElementById("links");
// console.log(links);

abrir.addEventListener(("click"), ()=>{
    links.classList.add("visible");
});
cerrar.addEventListener(("click"), ()=>{
 links.classList.remove("visible");
});