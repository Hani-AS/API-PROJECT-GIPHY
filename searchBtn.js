"use strict";

import { createContainer } from "./createElements.js";
import { loadMoreSearch } from "./loadMoreBtn.js";
import { API_KEY } from "./config.js";
import { requestData } from "./helpers.js";

//Search button
export const searchBtn = () => {
  const btn = document.querySelector(".btn-outline-success");
  btn.addEventListener("click", async () => {
    let formInput = document.querySelector(".form-control").value.trim();
    if (!formInput) {
      alert("You forgot to enter a phrase!");
    } else {
      const searchData = await requestData(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${formInput}&limit=25&offset=0&rating=g&lang=en`
      );

      // Clear container
      const clearContent = document.querySelector(".container_body");
      clearContent.parentElement.removeChild(clearContent);
      const loadMoreBtn = document.querySelector(".load-more-btn");
      loadMoreBtn.parentElement.removeChild(loadMoreBtn);
      createContainer(searchData.data);
      loadMoreSearch(formInput);
      document.querySelector(".form-control").value = "";
    }
  });
};
