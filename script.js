// script.js

// Make a request to the server to fetch the currently playing track
fetch('/currently-playing')
  .then(response => response.json())
  .then(data => {
    // Update the music player in the HTML file with the received data
    document.getElementById('audio-player').src = data.previewUrl;
    document.getElementById('track-name').textContent = data.name;
    document.getElementById('artist').textContent = data.artist;
    document.getElementById('album').textContent = data.album;
    document.getElementById('album-artwork').src = data.albumArtwork;
  })
  .catch(error => {
    console.log('Error fetching currently playing track:', error);
  });
