// DOM Elements
      const yesBtn = document.getElementById("yesBtn");
      const noBtn = document.getElementById("noBtn");
      const proposalContent = document.getElementById("proposalContent");
      const loveContent = document.getElementById("loveContent");
      const bgHearts = document.getElementById("bg-hearts");
      const loveSound = document.getElementById("loveSound");

      // Create floating background hearts
      function initBgHearts() {
        const heartSymbols = ["❤️", "💖", "💕", "🌸", "✨"];
        for (let i = 0; i < 15; i++) {
          createBgHeart(heartSymbols);
        }
      }

      function createBgHeart(symbols) {
        const heart = document.createElement("div");
        heart.classList.add("bg-heart");
        heart.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        heart.style.animationDuration = Math.random() * 5 + 5 + "s";
        heart.style.animationDelay = Math.random() * 5 + "s";
        bgHearts.appendChild(heart);
      }

      // "Yes" Button Logic
      yesBtn.addEventListener("click", () => {
        proposalContent.classList.add("hidden");
        loveContent.classList.remove("hidden");
        noBtn.style.display = "none"; // Hide the "No" button after clicking "Yes"
        loveSound.play(); // Play the sound
        fireConfetti();
      });

      // "No" Button Logic - Move around the screen on hover
      noBtn.addEventListener("mouseenter", () => {
        // Move the button to body for absolute positioning across the screen
        document.body.appendChild(noBtn);
        noBtn.style.position = "absolute";
        noBtn.style.left =
          Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
        noBtn.style.top =
          Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
        noBtn.style.zIndex = "100"; // Ensure it's above other elements
      });

      // Optional: If clicked, maybe move it again (to make it even harder)
      noBtn.addEventListener("click", () => {
        noBtn.style.left =
          Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
        noBtn.style.top =
          Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
      });

      // Confetti Effect
      function fireConfetti() {
        const colors = ["#ff4d6d", "#ff8fa3", "#fff0f3", "#ffd700", "#ffffff"];

        for (let i = 0; i < 100; i++) {
          const confetti = document.createElement("div");
          confetti.classList.add("confetti");

          const bg = colors[Math.floor(Math.random() * colors.length)];
          const left = Math.random() * 100 + "vw";
          const animDuration = Math.random() * 3 + 2 + "s";
          const size = Math.random() * 10 + 5 + "px";

          confetti.style.backgroundColor = bg;
          confetti.style.left = left;
          confetti.style.top = "-10px";
          confetti.style.width = size;
          confetti.style.height = size;
          confetti.style.animationDuration = animDuration;

          if (Math.random() > 0.5) {
            confetti.style.borderRadius = "50%";
          }

          document.body.appendChild(confetti);
          setTimeout(() => confetti.remove(), 5000);
        }
      }

      // Initialize
      initBgHearts();