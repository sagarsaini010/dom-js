let btn = document.querySelectorAll(".btn");

// Create an array of Audio objects for files 28.mp3 .. 57.mp3
const audios = [];
for (let i = 28; i <= 57; i++) {
  audios.push(new Audio(`./voice/${i}.mp3`));
}


btn.forEach((elem, index) => {
  elem.addEventListener("click", (e) => {
    e.stopPropagation();
    elem.style.marginTop = "5px";
    setTimeout(() => {
      elem.style.marginTop = "0";
    }, 150);

    const audio = audios[index % audios.length];
    if (audio) {
      try {
        audio.currentTime = 0;
        audio.play();
      } catch (err) {
        console.warn('Audio play failed', err);
      }
    }
  });
});

