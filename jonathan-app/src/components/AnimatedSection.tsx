"use client";

import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 600,
  className = '',
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  const animationClasses = {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right',
    scaleUp: 'animate-scale-up',
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        transition-all duration-${duration} ease-out
        ${isIntersecting ? animationClasses[animation] : 'opacity-0 translate-y-8'}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
