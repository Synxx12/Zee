document.addEventListener("DOMContentLoaded", function () {
  // Memanggil video element
  var video = document.getElementById("video");

  // Membuat objek HLS
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(video.src);
    hls.attachMedia(video);
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = video.src;
  }

  // Menginisialisasi Mousetrap jika file mousetrap.min.js digunakan
  Mousetrap.bind("space", function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});
