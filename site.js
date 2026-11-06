// The before and after slider.
document.querySelectorAll('.compare input').forEach((range) => {
  range.addEventListener('input', () => range.parentElement.style.setProperty('--pos', range.value + '%'));
});
