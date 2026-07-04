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

}function getBattles(){
    return JSON.parse(localStorage.getItem("battles")) || [];
}

function saveBattles(battles){
    localStorage.setItem("battles", JSON.stringify(battles));
}

function renderHistory(){

    const list = document.getElementById("battleList");
    let battles = getBattles();

    if(battles.length === 0){
        list.innerHTML = "<p>まだ戦績がありません</p>";
        return;
    }

    list.innerHTML = "";

    battles.slice().reverse().forEach((b, index) => {

        const realIndex = battles.length - 1 - index;

        const card = document.createElement("div");
        card.className = "battle-card";

        card.innerHTML = `
            <div class="battle-top">
                <span>${b.date}</span>
                <span class="result ${b.result}">${b.result}</span>
            </div>

            <div class="battle-main">
                <div>ステージ: ${b.stage}</div>
                <div>ブキ: ${b.weapon}</div>
            </div>

            <div class="battle-actions">
                <button onclick="showDetail(${realIndex})">詳細</button>
                <button onclick="deleteBattle(${realIndex})">削除</button>
            </div>
        `;

        list.appendChild(card);
    });
}

// =====================
// 削除機能
// =====================
function deleteBattle(index){

    if(!confirm("この戦績を削除しますか？")) return;

    let battles = getBattles();

    battles.splice(index, 1);

    saveBattles(battles);

    renderHistory();
}

// =====================
// 詳細表示
// =====================
function showDetail(index){

    const b = getBattles()[index];

    alert(
        "【戦績詳細】\n\n" +
        "日時: " + b.date + "\n" +
        "結果: " + b.result + "\n" +
        "ステージ: " + b.stage + "\n" +
        "ブキ: " + b.weapon + "\n" +
        "ルール: " + b.rule + "\n\n" +
        "キル: " + b.kill + "\n" +
        "デス: " + b.death + "\n" +
        "アシスト: " + b.assist + "\n" +
        "スペシャル: " + b.special + "\n" +
        "塗り: " + b.paint
    );
}

renderHistory();
