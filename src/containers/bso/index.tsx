'use client'

const TRACK = '0iM1Ioz4N4p7MU1DKyqsov';

const URL = `https://open.spotify.com/embed/track/${TRACK}?theme=0&view=list`;

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
