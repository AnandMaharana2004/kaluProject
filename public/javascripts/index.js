const manueButton = document.getElementById("manu")
const flotDiv = document.getElementById("flot-div")
manueButton.addEventListener("click", () => {
    flotDiv.classList.toggle("none")
})