import React from 'react';

interface YouTubeEmbedProps {
  url: string;
  width: number;
  height: number;
}

export default function YouTubeEmbed({ url, width, height }: YouTubeEmbedProps): React.ReactElement | null {
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(url);

  if (!videoId) return null;

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        allowFullScreen
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
