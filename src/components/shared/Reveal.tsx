import React, { useEffect, useRef, useState } from 'react';

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const Reveal = ({ 
  children, 
  className = '', 
  delay = 0, 
  threshold = 0.1, 
  rootMargin = '0px 0px -50px 0px',
  once = true 
}: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, threshold, rootMargin, once]);

  return (
    <div
      ref={elementRef}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export const StaggeredReveal = ({ 
  children, 
  className = '', 
  staggerDelay = 100,
  ...props 
}: Omit<RevealProps, 'delay'> & { staggerDelay?: number }) => {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <Reveal key={child.key || index} delay={index * staggerDelay} {...props}>
          {child}
        </Reveal>
      ))}
    </div>
  );
};