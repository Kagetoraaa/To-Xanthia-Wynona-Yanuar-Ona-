// Animasi fade-in saat halaman load
window.addEventListener('load', () => {
  document.querySelector('.letter-container').classList.add('active');
});

// Swipe & drag detection to navigate to Letter.html on swipe up
const letter = document.getElementById('letter');
let startY = 0;
let endY = 0;

if (letter) {
  // Mobile touch events
  letter.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
  });

  letter.addEventListener('touchend', (e) => {
    endY = e.changedTouches[0].clientY;
    handleSwipe();
  });

  // Desktop mouse drag events
  letter.addEventListener('mousedown', (e) => {
    startY = e.clientY;

    const onMouseMove = (eMove) => {
      endY = eMove.clientY;
    };

    const onMouseUp = () => {
      handleSwipe();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });
}

// Optional: efek parallax saat scroll untuk letter container
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if (letter) {
    // Geser sedikit ke atas seiring scroll, max 20px
    const offset = Math.min(scrollPos / 10, 20);
    letter.style.transform = `translateY(${offset}px)`;
  }
});