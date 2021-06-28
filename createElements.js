"use strict";

// Create container
export const createContainer = (data) => {
  const mainContainer = document.createElement("div");
  mainContainer.className = "container container_body mb-4";
  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";
  const containerHeader = document.querySelector(".container_header");
  containerHeader.appendChild(mainContainer);
  mainContainer.appendChild(imgContainer);
  createImages(data);
};

// Create images
export const createImages = (containerData) => {
  containerData.forEach((element) => {
    const col = document.createElement("div");
    col.className = "col";
    const img = document.createElement("img");
    img.className = "img-fluid w-100";
    img.src = element.images.fixed_width_downsampled.url;
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#staticBackdrop");
    img.addEventListener("click", () => {
      const imgURL = document.querySelector(".fetched-img");
      const modalTitle = document.querySelector(".modal-title");
      imgURL.src = `${element.images.downsized.url}`;
      modalTitle.textContent = `Title: ${element.title}`;
    });
    const imgContainer = document.querySelector(".img-container");
    imgContainer.appendChild(col);
    col.appendChild(img);
  });
};
