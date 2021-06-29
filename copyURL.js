"use strict";

export const copyURL = () => {
  const inputField = document.querySelector(".url-field");
  const urlCopyBtn = document.querySelector(".url-btn");
  urlCopyBtn.addEventListener("click", () => {
    inputField.select();
    document.execCommand("copy");
    urlCopyBtn.style.backgroundColor = "green";
    urlCopyBtn.textContent = "Copied!";
  });
};
