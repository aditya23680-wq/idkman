// Floating pink hearts
function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '💖';
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '-50px';
  heart.style.fontSize = (12 + Math.random() * 12) + 'px';
  heart.style.opacity = 0.5 + Math.random() * 0.5;
  heart.style.animation = `floatUp ${8 + Math.random() * 8}s linear infinite`;
  document.getElementById('floating-hearts').appendChild(heart);
}

const keyframes = `
@keyframes floatUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-120vh); }
}`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);


for(let i = 0; i < 20; i++) {
    createFloatingHeart();
}

// Heart blast animation
function blastHearts() {
  const blastContainer = document.getElementById('heart-blast');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.fontSize = `${15 + Math.random() * 25}px`;
    heart.style.opacity = 1;
    const angle = Math.random() * 360;
    const distance = 50 + Math.random() * 50;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    heart.style.transform = 'translate(-50%, -50%)';
    heart.style.transition = 'all 1.5s ease-out';
    blastContainer.appendChild(heart);

    setTimeout(() => {
        heart.style.left = `calc(50% + ${x}vw)`;
        heart.style.top = `calc(50% + ${y}vh)`;
        heart.style.opacity = 0;
    }, 100);

    setTimeout(() => {
      heart.remove();
    }, 1600);
  }
}

document.querySelector('.main-header h1').addEventListener('click', blastHearts);


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
