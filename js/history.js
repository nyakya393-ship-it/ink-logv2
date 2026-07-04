/* =========================
   HISTORY
========================= */

function renderBattleList(){

    const battleList=document.getElementById("battleList");

    if(!battleList) return;

    const battles=loadBattles();

    battleList.innerHTML="";

    if(battles.length===0){

        battleList.innerHTML=`
        <div class="empty-card">
            まだ試合が登録されていません
        </div>
        `;

        return;

    }

    battles.forEach((battle,index)=>{

        const card=document.createElement("div");

        card.className="battle-card";

        card.innerHTML=`

<div class="battle-top">

<span class="battle-result ${battle.result.includes("勝")?"win":"lose"}">

${battle.result}

</span>

<span>

${battle.rule}

</span>

</div>

<div class="battle-stage">

${battle.stage}

</div>

<div class="battle-weapon">

${battle.weapon}

</div>

<div class="battle-score">

${battle.kill}/${battle.assist}/${battle.death}

&nbsp;&nbsp;

SP ${battle.special}

&nbsp;&nbsp;

${battle.paint}p

</div>

`;

        battleList.appendChild(card);

    });

}
