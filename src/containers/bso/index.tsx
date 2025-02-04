'use client'

import { APP_SETTINGS } from "@/settings";

const URL = `https://open.spotify.com/embed/track/${APP_SETTINGS.SPOTIFY_TRACK_ID}?theme=0&view=list`;

const Bso = () => {
  return (
    <iframe
      src={URL}
      width="100%"
      height="80"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      title="Spotify Player"
      style={{ border: 0, borderRadius: '12px' }}
    />
  );
};

export { Bso };
