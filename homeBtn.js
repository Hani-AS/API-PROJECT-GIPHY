"use strict";

import { createContainer } from "./createElements.js";
import { loadMoreTrending } from "./loadMoreBtn.js";

export const homeBtn = (trendingData) => {
  const btn = document.querySelector(".home-btn");
  btn.addEventListener("click", () => {
    // Clear container
    const clearContent = document.querySelector(".container_body");
    clearContent.parentElement.removeChild(clearContent);
    const loadMoreBtn = document.querySelector(".load-more-btn");
    loadMoreBtn.parentElement.removeChild(loadMoreBtn);
    createContainer(trendingData);
    loadMoreTrending();
  });
};
