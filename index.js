const inputEl = document.querySelector(".slider__input");
const imgEl = document.querySelector(".slider__image");

const resizeImg = (event) => {
  const value = event.target.value;
  imgEl.style.width = value + "px";
};

inputEl.addEventListener("input", _.debounce(resizeImg, 250));

const boxEl = document.getElementById("box");

window.addEventListener(
  "mousemove",
  _.debounce((event) => {
    const x = event.clientX;
    const y = event.clientY;
    boxEl.style.left = x + "px";
    boxEl.style.top = y + "px";
  }, 100)
);
