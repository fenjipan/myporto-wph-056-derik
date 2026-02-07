'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/constants/navigation-data';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant='ghost'
        size='icon-lg'
        onClick={() => setOpen(true)}
        className='lg:hidden'
        aria-label='Open menu'
      >
        <Menu className='size-6 text-white' />
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className='fixed inset-0 z-50 bg-black lg:hidden'
          >
            {/* Header */}
            <div className='flex h-20 items-center justify-between px-4'>
              <div className='flex items-center gap-1'>
                <Image
                  src='/images/logo.svg'
                  alt='Logo'
                  width={24}
                  height={24}
                  className='size-6'
                />
                <span className='text-xl-bold text-white'>WILDERIK</span>
              </div>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setOpen(false)}
                aria-label='Close menu'
              >
                <Menu className='size-6 text-white' />
              </Button>
            </div>

            {/* Nav Links + Button */}
            <div className='flex flex-col gap-6 px-4 pt-4'>
              <div className='flex flex-col gap-2 rounded-[100px] backdrop-blur-[20px]'>
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + 0.05 * i, duration: 0.3 }}
                    className='text-md-medium flex items-center p-2 tracking-[-0.03em] text-white'
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Button variant='nav' asChild className='h-12 w-full'>
                  <a href='#contact' onClick={() => setOpen(false)}>
                    Get in Touch
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
