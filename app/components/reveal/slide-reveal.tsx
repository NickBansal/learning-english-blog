import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface RevealTypes {
  children: JSX.Element;
  leftPosition: boolean;
  delay?: number;
}

export const SlideReveal = ({ children, leftPosition, delay = 0 }: RevealTypes) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      if (isInView) {
        await mainControls.start('visible');
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    startAnimation();
  }, [isInView]);

  return (
    <div ref={ref} className="relative overflow-hidden w-full">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: leftPosition ? 1000 : -1000
          },
          visible: {
            opacity: 1,
            x: 0
          }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
          delay
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
