"use strict";
import { main } from "./main.js";

const createImages = (data) => {
  console.log(data);
  const trendingContainer = document.createElement("div");
  trendingContainer.className = "container container_body mb-4";
  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";
  data.forEach((element) => {
    const col = document.createElement("div");
    col.className = "col";
    const img = document.createElement("img");
    img.className = "img-fluid w-100";
    img.src = element.images.fixed_width_downsampled.url;
    imgContainer.appendChild(col);
    col.appendChild(img);
  });
  const containerHeader = document.querySelector(".container_header");
  containerHeader.appendChild(trendingContainer);
  trendingContainer.appendChild(imgContainer);
};

export default createImages;
