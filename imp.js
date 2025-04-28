function goHome() {
    document.getElementById('game').classList.add('hidden');   // Hide game
    document.getElementById('menu').classList.remove('hidden'); // Show mode selection
  }
  function initGame(mode) {
    playWithAI = mode === 'ai';
    document.getElementById('menu').classList.add('hidden');   // Hide mode menu
    document.getElementById('game').classList.remove('hidden'); // Show game
    startGame();
  }
    