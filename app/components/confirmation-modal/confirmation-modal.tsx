import { motion } from 'framer-motion';

export const ConfirmationModal = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute top-0 left-0 w-screen h-screen bg-[#0000004f] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[90%] h-[200px] max-w-xl bg-yellow-500 p-4 rounded-md flex flex-col items-center"
        variants={{
          hidden: {
            y: '-100vh',
            opacity: 0
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.1,
              type: 'spring',
              damping: 25,
              stiffness: 500
            }
          },
          exit: {
            y: '100vh',
            opacity: 0
          }
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
