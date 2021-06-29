"use strict";
import { createContainer } from "./createElements.js";
import { homeBtn } from "./homeBtn.js";
import { loadMoreTrending } from "./loadMoreBtn.js";
import { randomBtn } from "./randomBtn.js";
import searchBtnHandler from "./searchBtn.js";
const API_KEY = "ehrKVeT7l6Lmvj9XL8bZvjHA6K4ShrpF";

const requestData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  const trendingData = await requestData(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`
  );
  console.log(trendingData);
  createContainer(trendingData.data);
  homeBtn(trendingData.data);
  randomBtn();
  searchBtnHandler();
  loadMoreTrending();
};

window.addEventListener("load", main);

export { main, requestData, API_KEY };
