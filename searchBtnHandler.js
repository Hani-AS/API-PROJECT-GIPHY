"use strict";

import createImages from "./createImages.js";
import { requestData, API_KEY } from "./main.js";

const searchBtnHandler = () => {
  const btn = document.querySelector(".input-group-text");
  btn.addEventListener("click", async () => {
    const formInput = document.querySelector(".form-control").value.trim();
    const searchData = await requestData(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${formInput}&limit=25&offset=0&rating=g&lang=en`
    );
    const clearContent = document.querySelector(".container_body");
    clearContent.parentElement.removeChild(clearContent);
    createImages(searchData.data);
  });
};

export default searchBtnHandler;
