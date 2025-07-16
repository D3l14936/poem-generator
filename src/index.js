function displayPoem(response) {
  let poemContainer = document.querySelector("#poem");

  // typewriter
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

// api data + prompt
function generatePoem(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let apiKey = "f56ddo443f56b76637t0be5d36d0503a";
  let prompt = `Generate a haiku about ${userInput.value}, separate lines with <br>, please.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${apiKey}`;

  // show loading message
  let poemContainer = document.querySelector("#poem");
  poemContainer.innerHTML = "Loading...";

  axios.get(apiUrl).then(displayPoem);
}

let poemElement = document.querySelector("#poem-form");
poemElement.addEventListener("submit", generatePoem);
