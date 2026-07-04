/* =========================
   STORAGE
========================= */

const STORAGE_KEY = "inklog_battles";

function loadBattles(){

    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];

}

function saveBattles(battles){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(battles)

    );

}
function createBattle(data){

    const battles = loadBattles();

    battles.unshift(data);

    saveBattles(battles);

}
