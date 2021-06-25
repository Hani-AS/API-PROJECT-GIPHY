"use strict";
import { main } from "./main.js";

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

export const createImages = (containerData) => {
  containerData.forEach((element) => {
    const col = document.createElement("div");
    col.className = "col";
    const img = document.createElement("img");
    img.className = "img-fluid w-100";
    img.src = element.images.fixed_width_downsampled.url;
    const imgContainer = document.querySelector(".img-container");
    imgContainer.appendChild(col);
    col.appendChild(img);
  });
};

// export default { createContainer, createImages };
