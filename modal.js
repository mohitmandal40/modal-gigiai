document.addEventListener("DOMContentLoaded", function () {
  // Create modal with content and close button
  var modal = document.createElement("div");
  modal.id = "myModal";
  modal.className = "modal";
  modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>`;

  document.getElementById("app").appendChild(modal);

  modal.style.display = "block";
  //   test

  modal
    .querySelector(".close")
    .addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", (event) => {
    if (event.target == modal) modal.style.display = "none";
  });
});
