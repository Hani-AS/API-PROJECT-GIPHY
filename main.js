"use strict";
import { createContainer } from "./createElements.js";
import { homeBtn } from "./homeBtn.js";
import { loadMoreTrending } from "./loadMoreBtn.js";
import { randomBtn } from "./randomBtn.js";
import { searchBtnHandler } from "./searchBtn.js";
import { requestData } from "./helpers.js";
import { API_KEY } from "./config.js";

export const main = async () => {
  const trendingData = await requestData(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`
  );
  createContainer(trendingData.data);
  homeBtn(trendingData.data);
  randomBtn();
  searchBtnHandler();
  loadMoreTrending();
};

window.addEventListener("load", main);
