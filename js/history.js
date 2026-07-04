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
function renderHistory(){

    const list = document.getElementById("battleList");

    let battles = JSON.parse(localStorage.getItem("battles")) || [];

    if(battles.length === 0){
        list.innerHTML = "<p>まだ戦績がありません</p>";
        return;
    }

    list.innerHTML = "";

    battles.reverse().forEach((b, index) => {

        const card = document.createElement("div");
        card.className = "battle-card";

        card.innerHTML = `
            <div class="battle-top">
                <span>${b.date}</span>
                <span>${b.result}</span>
            </div>

            <div class="battle-main">
                <div>ステージ: ${b.stage}</div>
                <div>ブキ: ${b.weapon}</div>
                <div>ルール: ${b.rule}</div>
            </div>

            <div class="battle-stats">
                <span>キル ${b.kill}</span>
                <span>デス ${b.death}</span>
                <span>アシスト ${b.assist}</span>
                <span>SP ${b.special}</span>
                <span>塗り ${b.paint}</span>
            </div>
        `;

        list.appendChild(card);
    });
}

renderHistory();
