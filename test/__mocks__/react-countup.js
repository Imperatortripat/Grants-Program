import React from 'react';

// Real react-countup animates the number via requestAnimationFrame, so the
// final value is not deterministically present in jsdom. This stand-in renders
// the target `end` value immediately for stable assertions.
export default function CountUp({end}) {
  return <>{end}</>;
}
