'use client';

import { motion } from 'framer-motion';

interface SpawnToUpProps {
  className: string;
  children: React.ReactNode;
}

const SpawnToUp: React.FC<SpawnToUpProps> = ({ className, children }) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 3 }}
    >
      {children}
    </motion.div>
  );
}

export default SpawnToUp;