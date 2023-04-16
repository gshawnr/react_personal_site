import { useCallback, useState, useEffect, RefObject } from "react";

interface PositionProps {
  hasItemsOnLeft: boolean;
  hasItemsOnRight: boolean;
  scrollRight: () => void;
  scrollLeft: () => void;
}

function getPrevElement(list: HTMLElement[]) {
  const sibling = list[0].previousElementSibling;

  return sibling;
}

function getNextElement(list: HTMLElement[]) {
  const sibling = list[list.length - 1].nextElementSibling;

  if (sibling instanceof HTMLElement) {
    return sibling;
  }

  return null;
}

export function usePosition(ref: RefObject<HTMLDivElement>): PositionProps {
  const [prevElement, setPrevElement] = useState<HTMLElement | null>(null);
  const [nextElement, setNextElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current as HTMLElement;

    if (!element) {
      return;
    }

    const update = () => {
      const rect = element!.getBoundingClientRect();

      const visibleElements = Array.from(element!.children).filter(
        (child): child is HTMLElement => {
          if (child instanceof HTMLElement) {
            const childRect = child.getBoundingClientRect();
            return rect.left <= childRect.left && rect.right >= childRect.right;
          }
          return false;
        }
      );

      if (visibleElements.length > 0) {
        setPrevElement(getPrevElement(visibleElements) as HTMLElement | null);
        setNextElement(getNextElement(visibleElements) as HTMLElement | null);
      }
    };

    update();

    element?.addEventListener("scroll", update, { passive: true });

    return () => {
      element?.removeEventListener("scroll", update);
    };
  }, [ref]);

  const scrollToElement = useCallback(
    (element: HTMLElement | null) => {
      const currentNode = ref.current;

      if (!currentNode || !element) return;

      let newScrollPosition;

      newScrollPosition =
        element.offsetLeft +
        element.getBoundingClientRect().width / 2 -
        currentNode.getBoundingClientRect().width / 2;

      currentNode.scroll({
        left: newScrollPosition,
        behavior: "smooth",
      });
    },
    [ref]
  );

  const scrollRight = useCallback(
    () => scrollToElement(nextElement),
    [scrollToElement, nextElement]
  );

  const scrollLeft = useCallback(
    () => scrollToElement(prevElement),
    [scrollToElement, prevElement]
  );

  return {
    hasItemsOnLeft: prevElement !== null,
    hasItemsOnRight: nextElement !== null,
    scrollRight,
    scrollLeft,
  };
}
