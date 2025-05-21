import 'framer-motion';

declare module 'framer-motion' {
  export interface HTMLMotionProps<TagName extends keyof React.JSX.IntrinsicElements>
    extends React.HTMLAttributes<HTMLElement>,
      Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
      MotionProps {
    className?: string;
    children?: React.ReactNode;
  }

  export interface MotionComponents {
    [key: string]: React.ForwardRefExoticComponent<
      React.PropsWithoutRef<{}> & React.RefAttributes<HTMLElement>
    >;
  }

  export const motion: {
    [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      React.PropsWithoutRef<JSX.IntrinsicElements[K]> & {
        className?: string;
        children?: React.ReactNode;
      } & MotionProps & {
          as?: keyof JSX.IntrinsicElements;
        }
    >;
  };
}
