"use strict";
import searchBtnHandler from "./searchBtnHandler.js";
import { publicValue } from "./searchBtnHandler.js";
import { createImages } from "./createElements.js";
import { API_KEY, requestData } from "./main.js";

const observerFunc = () => {
  const hr = document.querySelector("hr");
  let offset = 0;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(async (entry) => {
      if (entry.intersectionRatio > 0.2) {
        offset += 26;
        if (publicValue) {
          const searchData = await requestData(
            `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${publicValue}&limit=25&offset=${offset}&rating=g&lang=en`
          );
          createImages(searchData.data);
        } else {
          const trendingData = await requestData(
            `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=${offset}&rating=g`
          );
          createImages(trendingData.data);
        }
        const searchField = document.querySelector(".form-control");
        searchField.addEventListener("focus", () => {
          offset = 0;
        });
      }
    });
  });

  observer.observe(hr);
};

export default observerFunc;
