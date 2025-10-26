import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';
import { spinnerVariants } from './spinner-variants';

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(spinnerVariants({ size, className }))}
        {...props}
      />
    );
  }
);
Spinner.displayName = 'Spinner';
