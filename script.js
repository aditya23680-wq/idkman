// Floating pink hearts
function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.innerHTML = '💖';
  heart.style.position = 'absolute';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.bottom = '-40px';
  heart.style.fontSize = (16 + Math.random() * 24) + 'px';
  heart.style.opacity = 0.7 + Math.random() * 0.3;
  heart.style.transition = 'transform 6s linear, opacity 6s linear';
  document.getElementById('floating-hearts').appendChild(heart);
  setTimeout(() => {
    heart.style.transform = `translateY(-${window.innerHeight + 80}px)`;
    heart.style.opacity = 0;
  }, 100);
  setTimeout(() => {
    heart.remove();
  }, 6000);
}
setInterval(createFloatingHeart, 500);

// Heart blast animation
function blastHearts() {
  const blast = document.getElementById('heart-blast');
  blast.innerHTML = '';
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.className = 'blast-heart';
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = '48px';
    heart.style.left = (i < 6 ? '-60px' : (window.innerWidth + 60) + 'px');
    heart.style.top = (window.innerHeight / 2 + (Math.random() * 200 - 100)) + 'px';
    heart.style.filter = 'drop-shadow(0 0 16px #ff3366)';
    heart.style.opacity = 1;
    blast.appendChild(heart);
    setTimeout(() => {
      heart.style.transition = 'left 1.2s cubic-bezier(.5,1.5,.5,1), opacity 1.2s';
      heart.style.left = (window.innerWidth / 2 + (Math.random() * 200 - 100)) + 'px';
      heart.style.opacity = 0;
    }, 100);
    setTimeout(() => {
      heart.remove();
    }, 1400);
  }
}
blastHearts();
setInterval(blastHearts, 4000);

// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
}
