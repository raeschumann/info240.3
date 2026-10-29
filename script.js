function shootConfetti() {
  // Fires a burst of confetti!
  confetti({
    particleCount: 150, // How many pieces of confetti
    spread: 80,         // How wide it shoots out
    origin: { y: 0.6 }  // Starts slightly lower on the screen
  });
  
  // Optional: You can also print a message to the console to prove your JS is running!
  console.log("Confetti launched!");
}