window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});

$(document).ready(function () {
  var envelope = $('#envelope');
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var letter = document.querySelector('.letter'); // ambil elemen .letter

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }

  let startY = 0;
  let endY = 0;

  if (letter) {
    // Untuk perangkat sentuh (mobile)
    letter.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
      // console.log('touchstart', startY);
    });

    letter.addEventListener('touchend', (e) => {
      endY = e.changedTouches[0].clientY;
      // console.log('touchend', endY);
      handleSwipe();
    });

    // Untuk perangkat desktop (drag pakai mouse)
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

  function handleSwipe() {
    if (startY - endY > 5) {
      // swipe ke atas terdeteksi, pindah halaman
      letter.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    letter.style.transform = 'translateY(-100vh) scale(0.8)';
    letter.style.opacity = '0';
      setTimeout(() => {
        window.location.replace("Letter.html");
      }, 600);
    }
  }
});