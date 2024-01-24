const updatePlaceholder = (e) => {
  e.forEach(function (e) {
    "City, County, Subdivision, etc" === e.placeholder &&
      (e.placeholder = "City, Address, ZIP");
  });
};
{
  let t = setInterval(() => {
    try {
      let e = document.querySelectorAll("input"),
        i = document.querySelector(".search-content");
      if (!e) return;
      updatePlaceholder(e),
        new MutationObserver((t, i) => {
          for (let r of t)
            "childList" === r.type &&
              e &&
              "City, County, Subdivision, etc" !== e[0].placeholder &&
              updatePlaceholder(e);
        }).observe(i, { childList: !0, subtree: !0 }),
        clearInterval(t);
    } catch (r) {
      console.error("input ->", r);
    }
  }, 50);
}
function updatedh(e, t = !0) {
  let i = document.querySelector(e);
  i && ((i.textContent = "Sort"), t && (i.style.opacity = 1));
}
const updateSort = (e) => {
  updatedh(".list-panel li:first-child span"),
    e && e.classList.contains("selected") && updatedh(".title .text");
};
{
  let i = setInterval(() => {
    try {
      let e = document.querySelector(".search-result-header .click-show-list");
      if (!e) return;
      updateSort(e),
        new MutationObserver((t, i) => {
          for (let r of t)
            if ("childList" === r.type) {
              let l = e.querySelector(".list-panel li:first-child");
              l &&
                !l.classList.contains("edited") &&
                (l.classList.add("edited"), updateSort(l));
            }
        }).observe(e, { childList: !0, subtree: !0 }),
        clearInterval(i);
    } catch (t) {
      console.error("input ->", t);
    }
  }, 50);
}
