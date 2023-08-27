// constants

let page = 1,
  id = 0;
const search = document.querySelector(".search");
const items = document.querySelector(".items");
const p = document.querySelector(".loading");

// api

const fetchData = async () => {
  await fetch(
    `https://openlibrary.org/search.json?q=${search.value}&page=${page}`
  )
    .then((data) => data.json())
    .then(({ docs }) => {
      // console.log(docs);
      p.style.display = "none";
      docs.map((doc) => {
        const para = document.createElement("p");
        para.setAttribute("id", `${id++}`);
        para.style.margin = 0;
        para.innerHTML = doc.title;
        items.insertBefore(para, p);
      });
    });
};

// functionality

search.addEventListener("keypress", async (e) => {
  if (search.value != "" && e.key === "Enter") {
    p.style.display = "flex";
    p.style.justifyContent = "center";
    await fetchData();
  }
});

// last element is in view port

function isInViewport(element) {
  const rect = element?.getBoundingClientRect();
  return (
    rect?.top >= 0 &&
    rect?.left >= 0 &&
    rect?.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect?.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", async () => {
  const lastElement = document.getElementById(`${100 * page - 1}`);
  let found = isInViewport(lastElement);
  if (found) {
    p.style.display = "flex";
    p.style.justifyContent = "center";
    page++;
    await fetchData();
  }
});
