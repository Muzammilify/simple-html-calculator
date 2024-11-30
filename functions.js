let currentInput = '';

function pressKey(key) {
  if (currentInput === '0' && key !== '.') currentInput = '';
  currentInput += key;
  updateScreen();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = 'Error';
  }
  updateScreen();
}

function clearScreen() {
  currentInput = '';
  updateScreen();
}

function updateScreen() {
  const screen = document.getElementById('screen');
  screen.textContent = currentInput || '0';
}