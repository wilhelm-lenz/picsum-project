"use strict";

fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())
  .then((data) => {
    const sectionElement = document.querySelector(".gallary");

    for (let i = 0; i < data.length; i++) {
      const figureElement = document.createElement("figure");
      const imgElement = document.createElement("img");
      const figcaption = document.createElement("figcaption");
      const btnElement = document.createElement("button");
      const btn = document.querySelectorAll(".cta-btn");

      imgElement.setAttribute("src", data[i].download_url);
      imgElement.setAttribute("alt", data[i].author);
      btnElement.classList.add("cta-btn");

      figcaption.textContent = data[i].author;

      sectionElement.style.display = "grid";
      sectionElement.style.gridTemplateColumns =
        "repeat(auto-fill, minmax(400px, 1fr))";
      sectionElement.style.gap = "6rem";

      btnElement.textContent = "See more";

      figureElement.append(imgElement, figcaption, btnElement);
      sectionElement.append(figureElement);
      for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
          if (i === data[i].id) {
          }
          window.open(data[i].url);
        });
      }
    }
  })
  .catch((error) => console.log(error));
