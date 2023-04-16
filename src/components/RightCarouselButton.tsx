import React from "react";

import "./RightCarouselButton.css";

type RightCarouselBtnProps = {
  children: JSX.Element;
  hasItemsOnRight: boolean;
  handleClick: () => void;
};

const RightCarouselButton = ({
  children,
  hasItemsOnRight,
  handleClick,
}: RightCarouselBtnProps) => {
  return (
    <div
      className="RightCarouselButton"
      onClick={handleClick}
      style={
        hasItemsOnRight ? { visibility: "visible" } : { visibility: "hidden" }
      }
    >
      {children}
    </div>
  );
};

export default RightCarouselButton;
