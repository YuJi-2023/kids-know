import React from "react";

interface FeatureProps {
  feature: Feature
}
const WebFeature = ({ feature }: FeatureProps) => {
  return (
    <>
      <div className="text-center ">
        {React.createElement(feature.icon, { size: "40px" })}
        <p className="mt-3">{feature.text}</p>
      </div>
    </>
  );
};

export default WebFeature;
