//document.getElementById("count-el").innerText=7;
//let count=0;
//function increment(){  
//    document.getElementById("count-el").innerText=count++;
//}

let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el");
let count=0;
function increment(){
    count=count+1
    countEl.innerText=count
}
function save(){
    saveEl.innerText+=" "+countEl.textContent+" "+"-";
    countEl.innerText=0;
    count=0;
}
