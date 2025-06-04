document.querySelectorAll('.list').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle("rotate");
    const h2 = icon.closest("h2");
    const p = h2.nextElementSibling;
    p.classList.toggle("none");
});});