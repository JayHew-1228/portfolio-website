import 'react';
import { MotionValue } from 'framer-motion';

type MotionStyleValue = string | number | MotionValue<number> | MotionValue<string> | undefined;

declare module 'react' {
  interface CSSProperties {
    // Allow motion values for transform properties
    x?: MotionStyleValue;
    y?: MotionStyleValue;
    scale?: MotionStyleValue;
    rotate?: MotionStyleValue;
    opacity?: MotionStyleValue;
    // Allow any other custom properties
    [key: string]: MotionStyleValue | Record<string, MotionStyleValue>;
  }
}

// Extend the JSX namespace to allow our custom properties
declare global {
  namespace JSX {
    interface CSSProperties {
      // Allow motion values for transform properties
      x?: MotionStyleValue;
      y?: MotionStyleValue;
      scale?: MotionStyleValue;
      rotate?: MotionStyleValue;
      opacity?: MotionStyleValue;
      // Allow any other custom properties
      [key: string]: MotionStyleValue | Record<string, MotionStyleValue>;
    }
  }
}
