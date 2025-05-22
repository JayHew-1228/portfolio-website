declare module 'framer-motion' {
  import * as React from 'react';

  export interface MotionProps {
    initial?: boolean | Target | VariantLabels;
    animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
    exit?: TargetAndTransition | VariantLabels;
    variants?: Variants;
    transition?: Transition;
    style?: React.CSSProperties;
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
      React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
  }

  export interface MotionComponentProps extends MotionProps {
    [key: string]: any;
  }

  export interface MotionComponent<T, P> extends React.ForwardRefExoticComponent<P> {
    [key: string]: any;
  }

  export const motion: {
    [K in keyof React.JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      React.PropsWithoutRef<React.JSX.IntrinsicElements[K]> & MotionProps & { [key: string]: any }
    >;
  } & {
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

  export const motionValue: <T>(value: T) => MotionValue<T>;
  
  export interface MotionValue<T> {
    get(): T;
    set(value: T, render?: boolean): void;
    onChange(subscription: (value: T) => void): () => void;
  }

  
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
