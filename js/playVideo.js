function playVideo(videoId) {
  var modal = document.getElementById("video-player-modal");
  var video = document.getElementById("video-player");
  // 设置视频的src属性
  video.src = "/videos/" + videoId + ".mp4";

  modal.addEventListener("shown.bs.modal", function () {
    video.play();
  });
  modal.addEventListener("hidden.bs.modal", function () {
    video.pause();
    video.currentTime = 0; // 重置视频到起始位置
  });
}
