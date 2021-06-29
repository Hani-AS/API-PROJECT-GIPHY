// "use strict";
// import { publicSearchValue } from "./searchBtnHandler.js";
// import { createImages } from "./createElements.js";
// import { API_KEY, requestData } from "./main.js";
// import { generateRandomNumber, randomNumValue } from "./btnListener.js";

// const observerFunc = () => {
//   const hr = document.querySelector("hr");
//   let offset = 0;
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(async (entry) => {
//       if (entry.intersectionRatio > 0.2) {
//         offset += 26;

//         // search content observer
//         if (publicSearchValue) {
//           const searchData = await requestData(
//             `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${publicSearchValue}&limit=25&offset=${offset}&rating=g&lang=en`
//           );
//           createImages(searchData.data);

//           // Random content observer
//         } else if (randomNumValue) {
//           const randomData = await requestData(
//             `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=${generateRandomNumber(
//               1000,
//               4500
//             )}&rating=g`
//           );
//           createImages(randomData.data);
//         } else {
//           // Trending content observer
//           const trendingData = await requestData(
//             `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&limit=25&offset=${offset}&rating=g`
//           );
//           console.log(trendingData);
//           createImages(trendingData.data);
//         }
//         const searchField = document.querySelector(".form-control");
//         searchField.addEventListener("focus", () => {
//           offset = 0;
//         });
//       }
//     });
//   });

//   observer.observe(hr);
// };

// export default observerFunc;
