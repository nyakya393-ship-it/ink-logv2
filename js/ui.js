/* =========================
   UI
========================= */

function showToast(message){

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {

        toast.classList.add("show");

    });

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        },300);

    },2000);

}
/* =========================
   PAGE CHANGE
========================= */

document.addEventListener("DOMContentLoaded",()=>{

    const buttons=document.querySelectorAll(".nav-btn");

    const pages=document.querySelectorAll(".page");

    const title=document.querySelector(".topbar h2");

    const titles=[
        "ホーム",
        "試合登録",
        "戦績",
        "分析",
        "バッジ",
        "設定"
    ];

    buttons.forEach((button,index)=>{

        button.addEventListener("click",()=>{

            buttons.forEach(btn=>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            pages.forEach(page=>
                page.classList.remove("active")
            );

            if(index>0){

                pages[index-1].classList.add("active");

            }

            title.textContent=titles[index];

        });

    });

});
