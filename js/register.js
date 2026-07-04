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
/* =========================
   SAVE
========================= */

const battleForm = document.getElementById("battleForm");

if(battleForm){

battleForm.addEventListener("submit",event=>{

event.preventDefault();

const battle={

id:Date.now(),

date:document.getElementById("battleDate").value,

battleType:document.getElementById("battleType").value,

rule:document.getElementById("rule").value,

stage:document.getElementById("stage").value,

weapon:document.getElementById("weapon").value,

rank:document.getElementById("rank").value,

result:selectedResult,

kill:+document.getElementById("kill").value,

assist:+document.getElementById("assist").value,

death:+document.getElementById("death").value,

special:+document.getElementById("special").value,

paint:+document.getElementById("paint").value,

memo:document.getElementById("memo").value,

favorite:document.getElementById("favorite").checked

};

createBattle(battle);

showToast("試合を登録しました！");

battleForm.reset();

initDate();

});

}
