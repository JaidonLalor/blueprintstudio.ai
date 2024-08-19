import { useEffect, useContext } from 'react';
import { processScroll } from './scrollProcessor';
import { classifyScrollGesture } from './scrollClassifier';
import { debounceScrollDirection } from './debounceScrollDirection';
import { GestureContext } from '@/features/GestureHandler/GestureContext';


export function useScrollHandler(containerRef: React.RefObject<HTMLElement>) {
  const { goUp, goLeft, goRight, goDown } = useContext(GestureContext);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const scrollData = processScroll(event);
      console.log(scrollData);
      
      if (scrollData) {
        const direction = classifyScrollGesture(scrollData);
        // console.log(direction)
        debounceScrollDirection(direction, (debouncedDirection) => {
          if (debouncedDirection === 'up') goUp();
          if (debouncedDirection === 'left') goLeft();
          if (debouncedDirection === 'right') goRight();
          if (debouncedDirection === 'down') goDown();
        });
        // doubleScrollHandler(scrollData, direction, (callback) => {
        //   if (callback) console.log(direction);
        // });
      }

    }

    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('wheel', handleWheel);
    }

  }, [containerRef])
}