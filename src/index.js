document.addEventListener("DOMContentLoaded", function () {
  function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
      strings: "poem goes here",
      autoStart: true,
      delay: 40,
      cursor: "",
    });
  }

  let poemElement = document.querySelector("#poem-form");
  poemElement.addEventListener("submit", generatePoem);
});
