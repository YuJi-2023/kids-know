import React from "react";

const IntroVideo = () => {
  return (
    <>
      <div className="text-center my-5 text-primary">
        <h2>Check out this cool video!</h2>
        <iframe
          width="780"
          height="439"
          src="https://www.youtube.com/embed/tV8G7lZbldU"
          title="Kids On &#39;Self-Directed Learning&#39;"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>{" "}
      </div>
    </>
  );
};

export default IntroVideo;
