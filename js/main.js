// To Download PDF File
function downloadPDF() {
  const link = document.createElement("a");
  link.href = "C:/Users/CITY_LAP/Desktop/Project/Kids Information.pdf";
  link.download = "Kids Information.pdf";
  link.target = "_blank";
  link.click();
}

// Change the navbar color when scrolling
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("my-nav-bar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Adjust the number to control when the color changes
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

//Make the word repeat

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const wordContainer = document.getElementById("animated-word");
  const word = "Kids Daily"; // Change this to the word you want to animate
  const delay = 150; // Delay in milliseconds between each letter
  const pause = 1000; // Pause in milliseconds before restarting the animation

  function displayWordLetterByLetter(word, container, delay, pause) {
    let index = 0;

    function addNextLetter() {
      if (index < word.length) {
        container.textContent += word[index];
        index++;
        setTimeout(addNextLetter, delay);
      } else {
        setTimeout(() => {
          container.textContent = "";
          displayWordLetterByLetter(word, container, delay, pause);
        }, pause);
      }
    }

    container.textContent = ""; // Clear the container
    addNextLetter();
  }

  displayWordLetterByLetter(word, wordContainer, delay, pause);
});
