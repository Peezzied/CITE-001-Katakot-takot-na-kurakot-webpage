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