import { MotionFooter } from '@/components/motion';

export default function Footer() {
  return (
    <MotionFooter
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='border-t border-white/10 px-2 py-6 text-center'
    >
      <p className='text-xs-regular lg:text-md-regular tracking-[-0.03em] text-neutral-400'>
        &copy; 2026 Wilderik. All rights reserved.
      </p>
    </MotionFooter>
  );
}
