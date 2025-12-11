"use client";

import { useEffect, useState, useRef } from "react";

// Shared observer (singleton)
let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new WeakMap<Element, (visible: boolean) => void>();

function getSharedObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = observerCallbacks.get(entry.target);
          if (cb) cb(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );
  }
  return sharedObserver;
}

// Reusable visibility hook
function useSharedVisibility(ref: React.RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getSharedObserver();
    observerCallbacks.set(element, setIsVisible);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observerCallbacks.delete(element);
    };
  }, [ref]);

  return isVisible;
}

export default function CounterUp({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useSharedVisibility(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    let frameID: number;

    const animate = () => {
      start += increment;

      if (start < end) {
        setCount(Math.floor(start));
        frameID = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameID = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameID);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
}
