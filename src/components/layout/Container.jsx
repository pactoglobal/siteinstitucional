import React from 'react';
import { cn } from '../../utils/cn';

export const Container = ({ children, className, size = 'default' }) => {
  const sizes = {
    default: "max-w-7xl",
    small: "max-w-4xl",
    large: "max-w-[1440px]",
    full: "max-w-full"
  };

  return (
    <div className={cn("container mx-auto px-4 md:px-8 lg:px-12", sizes[size], className)}>
      {children}
    </div>
  );
};
