var modal = document.createElement("div");
(modal.id = "myModal"),
  (modal.className = "modal-list"),
  (modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>Some text in the Modal..</p>
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
  window.addEventListener("click", (e) => {
    e.target == modal &&
      (modal.classList.remove("modal-visible"),
      localStorage.setItem("showPopup", "false"));
  });
