const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  btn.appendChild(ripple);
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.addEventListener("animationend", () => {
    btn.removeChild(ripple);
  });
});

const btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  btn2.appendChild(ripple);
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.addEventListener("animationend", () => {
    btn2.removeChild(ripple);
  });
});

const btn3 = document.querySelector(".btn3");

btn3.addEventListener("click", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  btn3.appendChild(ripple);
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.addEventListener("animationend", () => {
    btn3.removeChild(ripple);
  });
});