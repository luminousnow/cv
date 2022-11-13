const technologyTagList = document.querySelectorAll(".technology-item");
const skillTagList = document.querySelectorAll(".skill-item");
const toolTagList = document.querySelectorAll(".tool-item");

const tagList = [...technologyTagList, ...skillTagList, ...toolTagList];

// console.log(tagList);

tagList.forEach((tag) => tag.addEventListener("mouseover", handleMouseUp));

function handleMouseUp(e) {
  console.log(e.target.textContent);
}
