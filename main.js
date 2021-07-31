const btn = document.querySelector(`#btn`);
const setLuckyNum = () =>
  (document.querySelector(`#lucky`).innerHTML = Math.floor(
    Math.random() * 100
  ));
setLuckyNum();
btn.addEventListener("click", setLuckyNum);
