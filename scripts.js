function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.video-btn');
  const popup = document.getElementById('video-popup');
  const closePopup = document.getElementById('close-popup');
  const videoPlayer = document.getElementById('video-player');
  const videoSource = document.getElementById('video-source');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const videoUrl = this.getAttribute('data-video');
          videoSource.src = videoUrl;
          videoPlayer.load(); // Load the new video
          popup.style.display = 'flex'; // Show the popup
          videoPlayer.play(); // Automatically play the video
      });
  });

  closePopup.addEventListener('click', function() {
      popup.style.display = 'none';
      videoPlayer.pause(); // Pause the video when closing the popup
  });

  // Close popup when clicking outside of the video player
  popup.addEventListener('click', function(e) {
      if (e.target === popup) {
          popup.style.display = 'none';
          videoPlayer.pause(); // Pause the video when clicking outside
      }
  });
});