import React from 'react';

const SpotifyPlaylist = () => {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2eXvV9?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyPlaylist;