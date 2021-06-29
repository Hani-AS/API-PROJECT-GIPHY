"use strict";

import { createRandomImage } from "./createElements.js";
import { API_KEY, requestData } from "./main.js";

export const randomBtn = () => {
  const btn = document.querySelector(".random-btn");
  btn.addEventListener("click", async () => {
    const randomData = await requestData(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=g`
    );
    createRandomImage(randomData);
  });
};
