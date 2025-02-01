document.getElementById("heartButton").addEventListener("click", function () {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  // Random position
  const xPos = Math.random() * window.innerWidth;
  const yPos = window.innerHeight;

  heart.style.left = `${xPos}px`;
  heart.style.top = `${yPos}px`;

  document.getElementById("heartContainer").appendChild(heart);

  // Remove the heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, 1000); // Matches the duration of the animation
});
