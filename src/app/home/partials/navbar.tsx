import Image from 'next/image';

import MobileNav from '@/components/mobile-nav';
import { MotionNav } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/constants/navigation-data';

export default function Navbar() {
  return (
    <MotionNav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='relative z-50 mx-auto flex h-20 w-full max-w-360 items-center justify-between px-4 lg:px-30'
    >
      <div className='flex items-center gap-2'>
        <Image
          src='/images/logo.svg'
          alt='Logo'
          width={43}
          height={43}
          className='size-10.75'
        />
        <span className='text-xl-bold text-white'>Wilderik</span>
      </div>
      <div className='hidden h-12 items-center gap-6 rounded-full px-6 backdrop-blur-[20px] lg:flex'>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className='text-md-medium hover:text-primary-100 tracking-[-0.03em] text-white transition-colors'
          >
            {link}
          </a>
        ))}
      </div>
      <Button variant='nav' asChild className='hidden h-12 w-70 lg:flex'>
        <a href='#contact'>Get in Touch</a>
      </Button>
      <MobileNav />
    </MotionNav>
  );
}
