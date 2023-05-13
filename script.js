// Function to handle song sharing form submission
function shareSong(event) {
  event.preventDefault();

  // Get the input values
  const artist = document.getElementById('artist').value;
  const songName = document.getElementById('songName').value;

  // Create a song object
  const song = {
    artist: artist,
    songName: songName
  };

  // Add the song to the shared songs list
  const sharedSongs = document.getElementById('sharedSongs');
  const songElement = document.createElement('div');
  songElement.className = 'song';
  songElement.innerHTML = `
    <h3>${song.artist}</h3>
    <p>${song.songName}</p>
    <a href="https://spotify.com/${song.artist}/${song.songName}">Spotify</a>
    <a href="https://music.apple.com/search?term=${song.artist} ${song.songName}">Apple Music</a>
    <a href="https://soundcloud.com/search?q=${song.artist} ${song.songName}">SoundCloud</a>
    <a href="https://youtube.com/results?search_query=${song.artist} ${song.songName}">YouTube</a>
  `;
  sharedSongs.appendChild(songElement);

  // Reset the form
  document.getElementById('shareForm').reset();
}

// Attach the shareSong function to the form submit event
document.getElementById('shareForm').addEventListener('submit', shareSong);
