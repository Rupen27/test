const audio = document.getElementById("love-song");
const button = document.getElementById("music-toggle");

if (audio && button) {
  let playing = false;

  button.addEventListener("click", async () => {
    if (!audio.querySelector("source")?.getAttribute("src")) {
      button.textContent = "Add a song first";
      return;
    }

    if (playing) {
      audio.pause();
      button.textContent = "Play our song";
      playing = false;
      return;
    }

    try {
      await audio.play();
      button.textContent = "Pause our song";
      playing = true;
    } catch {
      button.textContent = "Tap again to play";
    }
  });

  audio.addEventListener("ended", () => {
    button.textContent = "Play our song";
    playing = false;
  });
}
