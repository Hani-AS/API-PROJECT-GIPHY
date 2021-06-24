"use strict";
import { main } from "./main.js";

const createImages = (data) => {
  const trendingContainer = document.createElement("div");
  trendingContainer.className = "container container_body";
  const row = document.createElement("div");
  row.className = "row row-cols-2 row-cols-md-4 g-2";
  row.setAttribute("data-masonry", '{"percentPosition": true }');
  const polluteImages = data.forEach((element) => {
    const col = document.createElement("div");
    col.className = "col";
    const card = document.createElement("div");
    card.className = "card border-3 rounded border-light";
    const img = document.createElement("img");
    img.className = "img-fluid w-100";
    img.src = element.images.downsized.url;
    row.appendChild(col);
    col.appendChild(card);
    card.appendChild(img);
  });
  const containerHeader = document.querySelector(".container_header");
  containerHeader.appendChild(trendingContainer);
  trendingContainer.appendChild(row);
};

export default createImages;
