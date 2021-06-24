"use strict";
import createImages from "./createImages.js";
import searchBtnHandler from "./searchBtnHandler.js";
const API_KEY = "ehrKVeT7l6Lmvj9XL8bZvjHA6K4ShrpF";

const requestData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  // fetch url for trending gifs.
  const trendingData = await requestData(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=12&rating=g`
  );
  createImages(trendingData.data);
  searchBtnHandler();
};

window.addEventListener("load", main);

export { main, requestData, API_KEY };
