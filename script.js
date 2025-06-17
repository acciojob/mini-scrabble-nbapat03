const inputBox = document.getElementById('evaluatedText');
const letterCount = document.getElementById('letterCount');

inputBox.addEventListener('input', () => {
  letterCount.textContent = inputBox.value.length;
});
