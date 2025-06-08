  const bird = document.getElementById('bird');

bird.addEventListener('click', () => {
  bird.classList.add('fly');
  setTimeout(() => {
  window.location.replace("utama.html")
  }, 2000);
});
