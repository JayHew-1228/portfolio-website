import * as React from 'react';

declare global {
  namespace React {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // Add any custom HTML attributes here if needed
    }
  }

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    
    interface Element extends React.ReactElement<any, any> {}
  }
}

// Add type declarations for any missing modules
declare module 'lodash' {
  const _: any;
  export = _;
  export default _;
}
