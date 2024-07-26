"use strict";

const ele = document.getElementById("dis");

document.addEventListener("keydown", (e) => {
  ele.textContent = `${e.key} <===> ${e.code}`;
});
