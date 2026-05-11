import { useEffect, useRef, useState, RefObject } from 'react';

export const useSliderMovement = (containerRef: RefObject<HTMLDivElement>) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const actualTranslateRef = useRef(0);

  const normalizeTranslate = (translate: number, singleSetWidth: number) => {
    let normalized = translate % singleSetWidth;
    if (normalized < 0) {
      normalized += singleSetWidth;
    }
    return normalized;
  };

  const applyTransform = (translate: number) => {
    if (!containerRef.current) return translate;
    
    const container = containerRef.current;
    const totalWidth = container.scrollWidth;
    const numberOfSets = 3;
    const singleSetWidth = totalWidth / numberOfSets;
    const normalized = normalizeTranslate(translate, singleSetWidth);
    const offsetNormalized = normalized + singleSetWidth * 1;
    
    container.style.transform = `translate3d(-${offsetNormalized}px, 0px, 0px)`;
    return normalized;
  };

  useEffect(() => {
    const initializePosition = () => {
      if (containerRef.current && containerRef.current.parentElement) {
        const container = containerRef.current;
        const totalWidth = container.scrollWidth;
        
        if (totalWidth > 0) {
          const numberOfSets = 3;
          const singleSetWidth = totalWidth / numberOfSets;
          const startPosition = singleSetWidth * 0.5;
          
          actualTranslateRef.current = startPosition;
          applyTransform(startPosition);
          setIsInitialized(true);
        }
      }
    };

    const timeoutId = setTimeout(initializePosition, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollSpeed = 1.5;
    let animationFrameId = 0;

    const tick = () => {
      const newTranslate = actualTranslateRef.current + scrollSpeed;
      actualTranslateRef.current = newTranslate;
      applyTransform(newTranslate);
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return {
    isInitialized
  };
};
