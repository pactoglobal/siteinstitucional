import { useState, useEffect, useRef } from 'react';

/**
 * useReveal - Hook para animações de reveal no scroll
 * Uso: <Reveal> ou <Reveal delay={100}>
 */
export const useReveal = (options = {}) => {
 const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;
 const [isVisible, setIsVisible] = useState(false);
 const elementRef = useRef(null);

 useEffect(() => {
 const element = elementRef.current;
 if (!element) return;

 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 setTimeout(() => {
 setIsVisible(true);
 }, delay);
 observer.unobserve(entry.target);
 }
 });
 },
 { threshold, rootMargin }
 );

 observer.observe(element);
 return () => observer.disconnect();
 }, [threshold, rootMargin, delay]);

 return { ref: elementRef, isVisible };
};

/**
 * Componente Reveal para wrap de elementos com animação
 */
export const Reveal = ({ children, delay = 0, className = '', ...props }) => {
 const { ref, isVisible } = useReveal({ delay });

 return (
 <div
 ref={ref}
 className={`transition-all duration-700 ease-out ${
 isVisible
 ? 'opacity-100 translate-y-0'
 : 'opacity-0 translate-y-8'
 } ${className}`}
 {...props}
 >
 {children}
 </div>
 );
};
