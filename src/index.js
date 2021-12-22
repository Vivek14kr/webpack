
import("./index.css")
import image from "./download.png"

function add(first, second){
    return first +second;
}
console.log(add(3, 5))
const images = document.createElement("img");
images.src = image;
 document.getElementById("img").append(images)

document.getElementById("btn").addEventListener("click", makenote)
 function makenote(){
    let t = document.getElementById("note").value;
    if (t.length > 0){
    const h1 = document.createElement("h3");
    h1.innerText = t
   h1.classList.add("pinkcolor")
    document.getElementById("root").appendChild(h1)
    document.getElementById("note").value = "";
    
} else {
    alert("Dont left input empty")
}
}
