const video = document.getElementById('myVideo');

// Update progress bar as the video plays
video.addEventListener('timeupdate', function() {
  const progressBar = document.getElementById('progressBar');
  const percentComplete = (video.currentTime / video.duration) * 100;
  progressBar.style.width = percentComplete + '%';
});

// Save progress when the video is paused or ended
video.addEventListener('pause', function() {
  localStorage.setItem('videoProgress', video.currentTime);
});

video.addEventListener('ended', function() {
  localStorage.setItem('videoProgress', 0);
});

// Restore progress when the page is loaded
window.addEventListener('load', function() {
  const savedProgress = localStorage.getItem('videoProgress');
  if (savedProgress) {
    video.currentTime = savedProgress;
  }
});
