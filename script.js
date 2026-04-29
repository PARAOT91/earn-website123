let points = localStorage.getItem("points") || 0;
let adsWatched = localStorage.getItem("adsWatched") || 0;

document.getElementById("points").innerText = points;
document.getElementById("adsLeft").innerText = 5 - adsWatched;

function watchAd() {
  if (adsWatched >= 5) {
    document.getElementById("status").innerText = "Daily limit reached!";
    return;
  }

  let time = 10;

  let timer = setInterval(() => {
    document.getElementById("status").innerText = "Watching Ad: " + time + " sec";
    time--;

    if (time < 0) {
      clearInterval(timer);

      points = parseInt(points) + 10;
      adsWatched = parseInt(adsWatched) + 1;

      localStorage.setItem("points", points);
      localStorage.setItem("adsWatched", adsWatched);

      document.getElementById("points").innerText = points;
      document.getElementById("adsLeft").innerText = 5 - adsWatched;

      document.getElementById("status").innerText = "+10 Points Added!";
    }
  }, 1000);
}