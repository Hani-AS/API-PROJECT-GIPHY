"use strict";

import { copyURL } from "./copyURL.js";
import { nestedRandomBtn } from "./randomBtn.js";

// Create container
export const createContainer = (data) => {
  const mainContainer = document.createElement("div");
  mainContainer.className = "container container_body mb-4";
  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";
  const containerHeader = document.querySelector(".container_header");
  containerHeader.appendChild(mainContainer);
  mainContainer.appendChild(imgContainer);
  createImages(data);
};

// Create images
export const createImages = (containerData) => {
  containerData.forEach((element) => {
    const col = document.createElement("div");
    col.className = "col";
    const img = document.createElement("img");
    img.className = "img-fluid w-100";
    img.src = element.images.fixed_width_downsampled.url;
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#staticBackdrop");
    img.addEventListener("click", () => {
      const imgURL = document.querySelector(".fetched-img");
      const modalTitle = document.querySelector(".modal-title");
      imgURL.src = `${element.images.downsized.url}`;
      modalTitle.textContent = `Title: ${element.title}`;
      const urlField = document.querySelector(".url-field");
      urlField.setAttribute("value", `${element.url}`);
      const urlBtn = document.querySelector(".url-btn");
      urlBtn.style.backgroundColor = "#9933ff";
      urlBtn.textContent = "Copy";
      copyURL();
    });
    const imgContainer = document.querySelector(".img-container");
    imgContainer.appendChild(col);
    col.appendChild(img);
  });
};

// Create random image
export const createRandomImage = (data) => {
  const loadMoreBtn = document.querySelector(".load-more-btn");
  loadMoreBtn.innerHTML = "";
  const clearContent = document.querySelector(".container_body");
  clearContent.parentElement.removeChild(clearContent);
  const mainContainer = document.createElement("div");
  mainContainer.className =
    "container container_body mb-4 d-flex justify-content-center";
  const card = document.createElement("div");
  card.className = "card";
  const img = document.createElement("img");
  img.className = "img-fluid img-thumbnail";
  img.src = `${data.data.images.original.url}`;
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  const cardText = document.createElement("p");
  cardText.className = "card-text fw-bold";
  cardText.textContent = `Title: ${data.data.title}`;
  const cardBtn = document.createElement("button");
  cardBtn.className = "btn btn-success get-more";
  cardBtn.textContent = "Get more";
  cardBtn.addEventListener("click", nestedRandomBtn);
  const containerHeader = document.querySelector(".container_header");
  containerHeader.appendChild(mainContainer);
  mainContainer.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardBody);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardBtn);
};
