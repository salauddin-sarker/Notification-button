const notify = document.querySelector(".notify");
const btn = document.querySelector(".btn_notify");

btn.addEventListener("click", () => {
    let count = Number(notify.dataset.count || 0);
    notify.dataset.count = count + 1;

    if (count === 0) {
        notify.classList.add("add-numb");
    }
});


