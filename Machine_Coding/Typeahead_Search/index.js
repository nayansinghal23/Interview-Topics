const textBox = document.querySelector(".text-box");
const options = document.querySelector(".options");
const notFound = document.querySelector(".not-found");
let query = "",
  id = 0,
  arr = [],
  downPress = -1,
  upPress = arr.length,
  lastKeyPressed = "";

const fetchData = async () => {
  if (query === "") {
    options.style.display = "none";
    return;
  }
  try {
    await fetch(`https://swapi.dev/api/people/?search=${query}`)
      .then((res) => res.json())
      .then(({ results }) => {
        // console.log(results);
        if (results.length !== 0) {
          options.style.display = "flex";
          options.style.flexDirection = "column";
          options.style.alignItems = "center";
          arr = [...results];
          id = 0;
          downPress = -1;
          upPress = results.length;
          lastKeyPressed = "";
          // delete the previous nodes
          options.innerHTML = "";
          // search for new nodes
          results?.map((result) => {
            let p = document.createElement("p");
            p.innerHTML = result.name;
            p.setAttribute("id", `${id++}`);
            p.classList.add("para-class");
            options.appendChild(p);
            p.addEventListener("click", () => {
              textBox.value = query = result.name;
              options.style.display = "none";
            });
          });
        } else {
          options.style.display = "none";
          notFound.style.display = "flex";
        }
      });
  } catch (error) {
    throw new Error(error.message);
  }
};

const debounceCount = _.debounce(() => {
  fetchData();
}, 800);

textBox.addEventListener("input", () => {
  query = textBox.value;
  notFound.style.display = "none";
  debounceCount();
});

// handleing keys functionality

const handleDownKeyFunctionality = () => {
  if (lastKeyPressed === "UP") {
    downPress = upPress;
  }
  downPress++;
  if (downPress === arr.length) {
    downPress = 0;
  }
  document.getElementById(`${downPress}`).style.backgroundColor = "#c0c4dc";
  document.getElementById(
    `${(downPress + arr.length - 1) % arr.length}`
  ).style.backgroundColor = "cyan";
};

const handleUpKeyFunctionality = () => {
  if (lastKeyPressed === "DOWN") {
    upPress = downPress;
  }
  upPress--;
  if (upPress < 0) {
    upPress = arr.length - 1;
  }
  document.getElementById(`${upPress}`).style.backgroundColor = "#c0c4dc";
  document.getElementById(
    `${(upPress + 1) % arr.length}`
  ).style.backgroundColor = "cyan";
};

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    handleDownKeyFunctionality();
    lastKeyPressed = "DOWN";
  } else if (e.key === "ArrowUp") {
    handleUpKeyFunctionality();
    lastKeyPressed = "UP";
  } else if (e.key === "Enter") {
    if (lastKeyPressed === "DOWN") {
      const { name } = arr[downPress];
      textBox.value = query = name;
    } else if (lastKeyPressed === "UP") {
      const { name } = arr[upPress];
      textBox.value = query = name;
    }
    options.style.display = "none";
  }
});
