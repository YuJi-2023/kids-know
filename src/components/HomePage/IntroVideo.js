import React from "react";

const IntroVideo = () => {
  return (
    <>
      <div className="text-center py-5 text-primary bg-light">
        <h2 className="text-primary pb-3">Check out this cool video!</h2>
        <iframe
          width="780"
          height="439"
          src="https://www.youtube.com/embed/tV8G7lZbldU"
          title="Kids On &#39;Self-Directed Learning&#39;"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default IntroVideo;
