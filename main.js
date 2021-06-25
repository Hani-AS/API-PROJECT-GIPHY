"use strict";
import { createContainer } from "./createElements.js";
import observerFunc from "./intersectionObserver.js";
import searchBtnHandler from "./searchBtnHandler.js";
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
  createContainer(trendingData.data);
  searchBtnHandler();
  observerFunc();
};

window.addEventListener("load", main);

export { main, requestData, API_KEY };
