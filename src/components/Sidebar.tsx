"use client"

import React, { useState, useEffect, ReactNode } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { usePrefersReducedMotion } from '@/hooks';

interface SideProps {
  children: ReactNode;
  isHero?: boolean;
  orientation: 'left' | 'right';
}

const Sidebar: React.FC<SideProps> = ({ children, isHero = false, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHero);
  const prefersReducedMotion = usePrefersReducedMotion();
 const loaderDelay = 2000
  useEffect(() => {
    if (!isHero || prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, [isHero, prefersReducedMotion]);

  const sideClasses = `fixed bottom-0 ${orientation === 'left' ? 'left-10' : 'right-10'} z-10 text-light-slate
    md:${orientation === 'left' ? 'left-5' : 'right-5'}
    md:block hidden`;

  return (
    <div className={sideClasses}>
      {prefersReducedMotion ? (
        <>{children}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={isHero ? 'fade' : ''} timeout={isHero ? loaderDelay : 0}>
              {children}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </div>
  );
};

export default Sidebar;
