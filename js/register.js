/* =========================
   REGISTER
========================= */

let selectedResult = "勝利";

document.addEventListener("DOMContentLoaded",()=>{

    initRegister();

});

function initRegister(){

    initCounter();

    initResultButtons();

    initDate();

}
function initDate(){

    const input = document.getElementById("battleDate");

    if(!input) return;

    const now = new Date();

    now.setMinutes(

        now.getMinutes()-now.getTimezoneOffset()

    );

    input.value = now.toISOString().slice(0,16);

}
function initCounter(){

document.querySelectorAll(".counter").forEach(counter=>{

const input=counter.querySelector("input");

counter.querySelector(".minus")

.addEventListener("click",()=>{

input.value=Math.max(

0,

(+input.value)-1

);

});

counter.querySelector(".plus")

.addEventListener("click",()=>{

input.value=(+input.value)+1;

});

});

}
function initResultButtons(){

const buttons=document.querySelectorAll(".result-btn");

buttons.forEach(button=>{

button.onclick=()=>{

buttons.forEach(btn=>

btn.classList.remove(

"active-result"

));

button.classList.add(

"active-result"

);

selectedResult=

button.textContent.trim();

};

});

}
