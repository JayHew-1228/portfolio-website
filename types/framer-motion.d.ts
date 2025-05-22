declare module 'framer-motion' {
  import * as React from 'react';

  // Motion Value Types
  export interface MotionValue<T> {
    get(): T;
    set(value: T, render?: boolean): void;
    onChange(subscription: (value: T) => void): () => void;
    start(animation: AnimationPlaybackControls): void;
    stop(): void;
    isAnimating(): boolean;
    getVelocity(): number;
  }

  // Spring Options
  export interface SpringOptions {
    stiffness?: number;
    damping?: number;
    mass?: number;
    velocity?: number;
    restDelta?: number;
    restSpeed?: number;
  }

  // Scroll Options
  export interface ScrollOptions {
    container?: HTMLElement | null;
    target?: Element | null;
    offset?: string[];
    axis?: 'x' | 'y';
    layoutEffect?: boolean;
    smooth?: number;
  }

  // Viewport Options
  export interface ViewportOptions {
    root?: React.RefObject<HTMLElement>;
    margin?: string;
    amount?: 'some' | 'all' | number;
    once?: boolean;
  }

  // Motion Props
  export interface MotionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
    style?: React.CSSProperties & {
      [key: string]: string | number | MotionValue<number> | MotionValue<string> | undefined;
    };
    initial?: boolean | Target | VariantLabels;
    animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
    exit?: TargetAndTransition | VariantLabels;
    variants?: Variants;
    transition?: Transition;
    children?: React.ReactNode | MotionValue<number> | MotionValue<string> | MotionValue<any>;
    layout?: boolean | 'position' | 'size' | 'preserve-aspect';
    layoutId?: string;
    onAnimationStart?: () => void;
    onAnimationComplete?: () => void;
    onUpdate?: (latest: { [key: string]: string | number }) => void;
    custom?: any;
    inherit?: boolean;
    [key: string]: any;
  }

  export interface HTMLMotionProps<TagName extends keyof React.JSX.IntrinsicElements>
    extends MotionProps,
      Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
    [key: string]: any;
  }

  export interface MotionComponentProps extends MotionProps {
    [key: string]: any;
  }

  export interface MotionComponent<T, P> extends React.ForwardRefExoticComponent<P> {
    [key: string]: any;
  }

  // Motion Component Types
  type MotionHTMLElements = {
    [K in keyof React.JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      Omit<React.HTMLAttributes<HTMLElement>, 'style' | keyof MotionProps> & 
      MotionProps & {
        style?: React.CSSProperties & {
          [key: string]: string | number | MotionValue<number> | MotionValue<string> | undefined;
        } & {
          [key: string]: any;
        };
        [key: string]: any;
      }
    >;
  };

  export const motion: MotionHTMLElements & {
    [key: string]: any;
  };

  export const AnimatePresence: React.FC<{
    children?: React.ReactNode;
    initial?: boolean;
    custom?: any;
    onExitComplete?: () => void;
    exitBeforeEnter?: boolean;
    presenceAffectsLayout?: boolean;
  }>;

  // Hooks
  export function useScroll(options?: ScrollOptions): {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
  };

  export function useSpring(
    value: MotionValue<number>,
    config?: SpringOptions
  ): MotionValue<number>;

  export function useInView(
    ref: React.RefObject<HTMLElement>,
    options?: ViewportOptions
  ): boolean;

  export const motionValue: <T>(value: T) => MotionValue<T>;

  
  export interface AnimationControls {
    start: (definition: AnimationDefinition) => Promise<any>;
    stop: () => void;
  }
  
  export type VariantLabels = string | string[];
  
  export interface Variants {
    [key: string]: TargetAndTransition;
  }
  
  export interface TargetAndTransition {
    [key: string]: any;
  }
  
  export interface Target {
    [key: string]: string | number | any;
  }
  
  export interface Transition {
    [key: string]: any;
  }
  
  export type AnimationDefinition = VariantLabels | TargetAndTransition | TargetResolver;
  
  export type TargetResolver = (i: number, total: number) => TargetAndTransition;
  
  export const useAnimation: () => AnimationControls;
  export const useMotionValue: <T>(initial: T) => MotionValue<T>;
  export const useTransform: <Input, Output>(
    value: MotionValue<Input> | number,
    inputRange: Input[],
    outputRange: Output[],
    options?: TransformOptions<Input>
  ) => MotionValue<Output>;
  
  export interface TransformOptions<Input> {
    clamp?: boolean;
    ease?: EasingFunction | EasingFunction[];
    mixer?: (from: Input, to: Input) => (v: number) => any;
  }
  
  export type EasingFunction = (v: number) => number;
  
  export const AnimateSharedLayout: React.FC<{
    children?: React.ReactNode;
  }>;
  
  export const LayoutGroup: React.FC<{
    children?: React.ReactNode;
  }>;
  
  export const MotionConfig: React.FC<{
    children?: React.ReactNode;
    [key: string]: any;
  }>;
}
