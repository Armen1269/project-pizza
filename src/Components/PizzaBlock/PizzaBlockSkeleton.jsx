import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton = () => (
  <ContentLoader
    className = "pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="136" cy="121" r="110" />
    <rect x="-1" y="261" rx="0" ry="0" width="280" height="30" />
    <rect x="0" y="309" rx="10" ry="10" width="280" height="77" />
    <rect x="3" y="408" rx="10" ry="10" width="90" height="30" />
    <rect x="130" y="408" rx="10" ry="10" width="150" height="45" />
  </ContentLoader>
);

export default PizzaBlockSkeleton;
