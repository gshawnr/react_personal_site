import React from "react";

import "./LeftCarouselButton.css";

type LeftCarouselBtnProps = {
  children: JSX.Element;
  hasItemsOnLeft: boolean;
  handleClick: () => void;
};

const LeftCarouselButton = ({
  children,
  hasItemsOnLeft,
  handleClick,
}: LeftCarouselBtnProps) => {
  return (
    <div
      className="LeftCarouselButton"
      onClick={handleClick}
      style={
        hasItemsOnLeft ? { visibility: "visible" } : { visibility: "hidden" }
      }
    >
      {children}
    </div>
  );
};

export default LeftCarouselButton;
