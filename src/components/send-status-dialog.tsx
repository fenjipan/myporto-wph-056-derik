'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';

interface SendStatusDialogProps {
  open: boolean;
  variant: 'success' | 'error';
  onAction: () => void;
}

export default function SendStatusDialog({
  open,
  variant,
  onAction,
}: SendStatusDialogProps) {
  const isError = variant === 'error';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className='fixed inset-0 z-50 flex items-center justify-center px-4'
        >
          {/* Backdrop */}
          <div className='absolute inset-0 bg-black/60' />

          {/* Modal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='relative w-full max-w-90.25 rounded-2xl bg-black px-6 pt-25 pb-6 lg:max-w-115.25 lg:pt-30'
          >
            {/* Envelope icon — full color for success, luminosity for error */}
            <div
              className={`absolute -top-12.25 left-1/2 size-32.25 -translate-x-1/2 ${isError ? 'mix-blend-luminosity' : ''}`}
            >
              <Image
                src={
                  isError
                    ? '/icons/mail-envelope.svg'
                    : '/icons/mail-envelope-success.svg'
                }
                alt=''
                fill
                className='object-contain'
              />

              {isError ? (
                <>
                  {/* Gradient circle behind X */}
                  <div className='absolute inset-[17%_32%_46%_31%]'>
                    <Image
                      src='/icons/mail-icon.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                  {/* X mark */}
                  <div className='absolute top-9 left-13.5 size-5.25'>
                    <Image
                      src='/icons/mail-x.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                </>
              ) : (
                /* Checkmark circle */
                <div className='absolute top-5.5 left-[40px] size-[48px]'>
                  <Image
                    src='/icons/mail-check.svg'
                    alt=''
                    fill
                    className='object-contain'
                  />
                </div>
              )}
            </div>

            {/* Text content */}
            <div
              className={`flex flex-col items-center text-center ${isError ? 'gap-2' : 'gap-0.5'}`}
            >
              <h3
                className={`text-neutral-25 ${
                  isError ? 'text-lg-bold lg:text-xl-bold' : 'text-lg-bold'
                }`}
              >
                {isError ? 'Send Failed' : 'Message Sent Successfully!'}
              </h3>
              <p
                className={`tracking-[-0.03em] text-neutral-400 ${
                  isError
                    ? 'text-sm-regular lg:text-md-regular'
                    : 'text-sm-regular'
                }`}
              >
                {isError ? (
                  "Something broke along the way. Let's try resending it."
                ) : (
                  <>
                    Thank you for reaching out.
                    <br />
                    I&apos;ll get back to you as soon as possible
                  </>
                )}
              </p>
            </div>

            {/* Action button */}
            <Button
              variant='cta'
              onClick={onAction}
              className='mt-6 h-12 w-full lg:mt-8'
            >
              {isError ? 'Try Again' : 'Back to Home'}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
