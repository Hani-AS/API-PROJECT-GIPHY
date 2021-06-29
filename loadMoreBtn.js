"use strict";

import { createImages } from "./createElements.js";
import { API_KEY, requestData } from "./main.js";

export const loadMoreTrending = () => {
  const btnContainer = document.createElement("div");
  btnContainer.className = "container load-more-btn text-center";
  const loadMoreBtn = document.createElement("button");
  loadMoreBtn.className = "btn btn-outline-success";
  loadMoreBtn.textContent = "Load more";
  let offset = 0;
  loadMoreBtn.addEventListener("click", async () => {
    offset += 26;
    const trendingData = await requestData(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=${offset}&rating=g`
    );
    createImages(trendingData.data);
  });
  const bodyContainer = document.querySelector(".container_header");
  bodyContainer.appendChild(btnContainer);
  btnContainer.appendChild(loadMoreBtn);
};

export const loadMoreSearch = (formInput) => {
  const btnContainer = document.createElement("div");
  btnContainer.className = "container load-more-btn text-center";
  const loadMoreBtn = document.createElement("button");
  loadMoreBtn.className = "btn btn-outline-success";
  loadMoreBtn.textContent = "Load more";
  let offset = 0;
  loadMoreBtn.addEventListener("click", async () => {
    offset += 26;
    const searchData = await requestData(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${formInput}&limit=25&offset=${offset}&rating=g&lang=en`
    );
    console.log(`from load more btn: ${formInput}`);
    createImages(searchData.data);
  });
  const bodyContainer = document.querySelector(".container_header");
  bodyContainer.appendChild(btnContainer);
  btnContainer.appendChild(loadMoreBtn);
};
