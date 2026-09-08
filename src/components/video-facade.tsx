"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

type VideoFacadeProps = {
  embed: string;
  platform: string;
  title: string;
};

export default function VideoFacade({ embed, platform, title }: VideoFacadeProps) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="embed-wrap">
        <iframe
          src={embed}
          title={`${platform}: ${title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="embed-wrap video-facade">
      <button
        type="button"
        onClick={() => {
          setActive(true);
          track("video_opened", { platform, title });
        }}
      >
        <span className="video-facade-platform">{platform}</span>
        <span className="video-facade-play" aria-hidden="true">▶</span>
        <span className="video-facade-title">Play: {title}</span>
      </button>
    </div>
  );
}
