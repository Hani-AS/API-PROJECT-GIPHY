"use strict";

import { createContainer } from "./createElements.js";
import { requestData, API_KEY } from "./main.js";
let publicSearchValue;
const searchBtnHandler = () => {
  const btn = document.querySelector(".input-group-text");
  btn.addEventListener("click", async () => {
    const formInput = document.querySelector(".form-control").value.trim();
    publicSearchValue = formInput;
    if (!formInput) {
      alert("You forgot to enter a phrase!");
    } else {
      const searchData = await requestData(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${formInput}&limit=25&offset=0&rating=g&lang=en`
      );
      document.querySelector(".form-control").value = "";
      const clearContent = document.querySelector(".container_body");
      const clearRandomContent = document.querySelector(".image-container");
      if (clearContent) {
        clearContent.parentElement.removeChild(clearContent);
      } else {
        clearRandomContent.parentElement.removeChild(clearRandomContent);
      }

      createContainer(searchData.data);
    }
  });
};
export { publicSearchValue };
export default searchBtnHandler;
