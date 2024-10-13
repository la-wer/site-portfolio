function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
}

let clickCount = 0

const profileName = document.getElementById("profile-name")
const modal = document.getElementById("easteregg-modal")
const closeModalBtn = document.querySelector(".close-btn")

profileName.addEventListener("click", function () {
  clickCount++

  if (clickCount === 3) {
    modal.style.display = "block"
    clickCount = 0
  }
})

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none"
})

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none"
  }
})
