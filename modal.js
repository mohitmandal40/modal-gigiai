console.log("alsdjkfslkd");
var modal = document.createElement("div");
(modal.id = "myModal"),
  (modal.className = "modal-list"),
  (modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <button class="banner-btn">FIND A HOME</button>
    </div>`),
  document.getElementById("app").appendChild(modal),
  localStorage.getItem("showPopup") ||
    localStorage.setItem("showPopup", "true"),
  "true" === localStorage.getItem("showPopup") &&
    modal.classList.add("modal-visible"),
  modal.querySelector(".close").addEventListener("click", () => {
    modal.classList.remove("modal-visible"),
      localStorage.setItem("showPopup", "false");
  }),
  modal.querySelector(".banner-btn").addEventListener("click", () => {
    modal.classList.remove("modal-visible"),
      localStorage.setItem("showPopup", "false");
  }),
  window.addEventListener("click", (e) => {
    e.target == modal &&
      (modal.classList.remove("modal-visible"),
      localStorage.setItem("showPopup", "false"));
  });
