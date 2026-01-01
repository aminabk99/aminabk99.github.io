document.addEventListener("mousemove", (e) => {
  requestAnimationFrame(() => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
  });
});
