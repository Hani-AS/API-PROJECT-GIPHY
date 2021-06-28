"use strict";

import { createContainer } from "./createElements.js";
import { API_KEY, requestData } from "./main.js";
export let randomNumValue;

export const btnListener = (trendingData) => {
  //Trending button
  const trendingBtn = document.getElementById("trending");
  trendingBtn.addEventListener("click", () => {
    createContainer(trendingData);
    const clearContent = document.querySelector(".container_body");
    const clearRandomContent = document.querySelector(".image-container");
    if (clearContent) {
      clearContent.parentElement.removeChild(clearContent);
    } else {
      clearRandomContent.parentElement.removeChild(clearRandomContent);
    }
  });

  //Random button
  const randomBtn = document.getElementById("random-gif");
  randomBtn.addEventListener("click", async () => {
    const randomData = await requestData(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=${generateRandomNumber(
        1000,
        4500
      )}&rating=g`
    );
    createContainer(randomData.data);
    randomNumValue = true;
    const clearContent = document.querySelector(".container_body");
    const clearRandomContent = document.querySelector(".image-container");
    if (clearContent) {
      clearContent.parentElement.removeChild(clearContent);
    } else {
      clearRandomContent.parentElement.removeChild(clearRandomContent);
    }
  });
};

export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
