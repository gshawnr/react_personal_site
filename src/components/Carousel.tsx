import React, { useRef } from "react";

import { usePosition } from "../hooks/usePosition";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import LeftCarouselButton from "./LeftCarouselButton";
import RightCarouselButton from "./RightCarouselButton";

import "./Carousel.css";

type CarouselProps = {
  children: React.ReactNode[];
};

const Carousel = ({ children }: CarouselProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { hasItemsOnLeft, hasItemsOnRight, scrollRight, scrollLeft } =
    usePosition(ref);

  return (
    <div className="CarouselContainer" role="region">
      <LeftCarouselButton
        hasItemsOnLeft={hasItemsOnLeft}
        handleClick={scrollLeft}
        aria-label="Previous slide"
      >
        <ArrowLeft />
      </LeftCarouselButton>
      <div className="CarouselContainerInner" ref={ref}>
        {children.map((child, index: number) => (
          <div className="CarouselItem" key={index}>
            {child}
          </div>
        ))}
      </div>
      <RightCarouselButton
        hasItemsOnRight={hasItemsOnRight}
        handleClick={scrollRight}
        aria-label="Next slide"
      >
        <ArrowRight />
      </RightCarouselButton>
    </div>
  );
};
export default Carousel;
