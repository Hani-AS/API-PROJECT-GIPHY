"use strict";

import { createImages } from "./createElements.js";
import { API_KEY } from "./config.js";
import { requestData } from "./helpers.js";

const loadMore = (type, query = "") => {
  const btnContainer = document.createElement("div");
  btnContainer.className = "container load-more-btn text-center";
  const loadMoreBtn = document.createElement("button");
  loadMoreBtn.className = "btn btn-outline-success";
  loadMoreBtn.textContent = "Load more";
  let offset = 0;
  loadMoreBtn.addEventListener("click", async () => {
    offset += 25;
    const trendingData = await requestData(
      `https://api.giphy.com/v1/gifs/${type}?api_key=${API_KEY}&limit=25&offset=${offset}&rating=g${query}`
    );
    createImages(trendingData.data);
  });
  const bodyContainer = document.querySelector(".container_header");
  bodyContainer.appendChild(btnContainer);
  btnContainer.appendChild(loadMoreBtn);
};

export const loadMoreTrending = () => {
  loadMore("trending");
};

export const loadMoreSearch = (formInput) => {
  loadMore("search", `&q=${formInput}`);
};
