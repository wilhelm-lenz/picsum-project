"use strict";

fetch("https://picsum.photos/v2/list")
  .then((res) => {
    console.log(res.status);
    if (!res.ok) {
      throw new Error(
        `Status-Code: ${res.status}. An error has occurred. Please check!`
      );
    }
    return res.json();
  })
  .then((data) => {
    const sectionElement = document.querySelector(".gallary");

    data.forEach((obj) => {
      console.log(obj);
      const figureElement = document.createElement("figure");
      const imgElement = document.createElement("img");
      const figcaption = document.createElement("figcaption");
      const btnElement = document.createElement("button");
      const btn = document.querySelectorAll(".cta-btn");

      imgElement.setAttribute("src", obj.download_url);
      imgElement.setAttribute("alt", obj.author);
      btnElement.classList.add("cta-btn");

      figcaption.textContent = obj.author;

      sectionElement.style.display = "grid";
      sectionElement.style.gridTemplateColumns =
        "repeat(auto-fill, minmax(400px, 1fr))";
      sectionElement.style.gap = "6rem";

      btnElement.textContent = "See more";

      figureElement.append(imgElement, figcaption, btnElement);
      sectionElement.append(figureElement);

      btnElement.addEventListener("click", () => {
        window.open(obj.url);
      });
    });
  })
  .catch((error) => console.log(error));
