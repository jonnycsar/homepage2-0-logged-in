import * as React from 'react';
export interface ChromeProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "brand-colored" | "monochrome";
}
export declare const Chrome: React.FC<ChromeProps>;
export default Chrome;
