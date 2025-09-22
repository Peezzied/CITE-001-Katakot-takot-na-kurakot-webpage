const colorChangeBoundSection = document.querySelectorAll(".colorChangeBound");

function changeColor() {
    const colors = ["#1a1816", "#282518", "#282c1d", "#212828"]
    const selectedColor = colors[Math.floor(Math.random() * colors.length)];

    console.log(selectedColor, colorChangeBoundSection);

    colorChangeBoundSection.forEach(section => {
        section.style.backgroundColor = selectedColor;
    });
}

const button = document.getElementById("interactable");
button.addEventListener("click", changeColor);

changeColor();


  const aside = document.getElementById("floatingAside");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight) {
      // at bottom
      aside.classList.add("hidden");
    } else {
      aside.classList.remove("hidden");
    }
  });