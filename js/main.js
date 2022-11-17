const technologyTagList = document.querySelectorAll(".technology-item");
const skillTagList = document.querySelectorAll(".skill-item");
const toolTagList = document.querySelectorAll(".tool-item");

const tagList = [...technologyTagList, ...skillTagList, ...toolTagList];

tagList.forEach((tag) => {
  tag.addEventListener("mouseover", (e) => {
    const inFocusList = tagList.filter(
      (tag) => tag.textContent === e.target.textContent
    );

    inFocusList.forEach((tag) => tag.classList.add("onFocus"));
  });

  tag.addEventListener("mouseout", (e) => {
    const inFocusList = tagList.filter(
      (tag) => tag.textContent === e.target.textContent
    );

    inFocusList.forEach((tag) => tag.classList.remove("onFocus"));
  });
});
