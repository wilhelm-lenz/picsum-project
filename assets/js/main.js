"use strict";

fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())
  .then((data) => {
    const sectionElement = document.querySelector(".gallary");

    for (let i = 0; i < data.length; i++) {
      console.log(data);
      console.log(sectionElement);
      const figureElement = document.createElement("figure");
      const imgElement = document.createElement("img");
      const figcaption = document.createElement("figcaption");
      const btnElement = document.createElement("button");
      imgElement.setAttribute("src", data[i].download_url);
      imgElement.setAttribute("alt", data[i].author);
      btnElement.classList.add("cta-btn");
      const btn = document.querySelectorAll(".cta-btn");

      figcaption.textContent = data[i].author;

      sectionElement.style.display = "grid";
      sectionElement.style.gridTemplateColumns =
        "repeat(auto-fill, minmax(400px, 1fr))";
      sectionElement.style.gap = "6rem";
      imgElement.style.width = "100%";
      imgElement.style.height = "100%";
      figcaption.style.marginTop = "0.8rem";
      btnElement.textContent = "See more";

      figureElement.append(imgElement, figcaption, btnElement);
      sectionElement.append(figureElement);
      console.log(btnElement);
      for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
          console.log(data[i].id);
          if (i === data[i].id) {
          }
          window.open(data[i].url);
        });
      }
    }
  })
  .catch((error) => console.log(error));
