"use strict";

import { createContainer } from "./createElements.js";
import { loadMoreSearch, loadMoreTrending } from "./loadMoreBtn.js";
import { requestData, API_KEY } from "./main.js";

//Search button
const searchBtnHandler = () => {
  const btn = document.querySelector(".btn-outline-success");
  btn.addEventListener("click", async () => {
    let formInput = document.querySelector(".form-control").value.trim();
    if (!formInput) {
      // alert("You forgot to enter a phrase!");
    } else {
      const searchData = await requestData(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${formInput}&limit=25&offset=0&rating=g&lang=en`
      );
      document.querySelector(".form-control").value = "";

      // Clear container
      const clearContent = document.querySelector(".container_body");
      clearContent.parentElement.removeChild(clearContent);
      const loadMoreBtn = document.querySelector(".load-more-btn");
      loadMoreBtn.parentElement.removeChild(loadMoreBtn);
      createContainer(searchData.data);
      loadMoreSearch(formInput);
    }
  });
};

export default searchBtnHandler;
