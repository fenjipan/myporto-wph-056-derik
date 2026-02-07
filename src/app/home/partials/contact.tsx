import Image from 'next/image';

import { FadeUp } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Contact() {
  return (
    <section
      id='contact'
      className='relative overflow-hidden px-4 pt-10 pb-20 lg:px-30 lg:pt-[80px] lg:pb-30'
    >
      {/* Purple gradient background */}
      <div
        className='absolute inset-x-0 bottom-0 h-223.25'
        style={{
          backgroundImage:
            'linear-gradient(-30deg, rgba(106,39,160,0.5) 15%, transparent 52%)',
        }}
      />

      <FadeUp className='relative mx-auto flex max-w-300 flex-col overflow-hidden rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:flex-row'>
        {/* Left/Top: Photo */}
        <div className='relative h-96.5 w-full lg:h-160.5 lg:w-1/2'>
          <Image
            src='/images/contact1.png'
            alt='Contact'
            fill
            className='object-cover'
          />
        </div>

        {/* Right/Bottom: Form */}
        <div className='flex w-full flex-col gap-6 border border-t-0 border-neutral-900 bg-black/80 px-4 py-6 backdrop-blur-2xl lg:w-1/2 lg:gap-8 lg:border-y lg:border-r lg:border-l-0 lg:px-5 lg:py-8'>
          <div>
            <h2 className='display-sm-bold lg:display-2xl-bold tracking-[-0.03em] text-white'>
              Start a Conversation
            </h2>
            <p className='text-md-regular lg:text-lg-regular mt-2 tracking-[-0.02em] text-neutral-400 lg:mt-4'>
              I&apos;m open to freelance gigs, collaborations, or even just a
              casual chat.
            </p>
          </div>

          <form className='flex flex-col gap-5 lg:gap-6'>
            {/* Name */}
            <div className='flex flex-col gap-2 lg:gap-3'>
              <Label className='text-sm-bold lg:text-md-bold text-neutral-25 tracking-[-0.02em]'>
                Name<span className='text-[#ee1d52]'>*</span>
              </Label>
              <Input
                type='text'
                placeholder='What should I call you?...'
                className='text-md-regular lg:text-lg-regular focus:border-primary-300 h-auto rounded-none border-x-0 border-t-0 border-b border-neutral-900 bg-transparent px-2 py-4 tracking-[-0.02em] text-white shadow-none placeholder:text-neutral-500 focus-visible:ring-0 lg:p-4'
              />
            </div>

            {/* Email */}
            <div className='flex flex-col gap-2 lg:gap-3'>
              <Label className='text-sm-bold lg:text-md-bold text-neutral-25 tracking-[-0.02em]'>
                Email<span className='text-[#ee1d52]'>*</span>
              </Label>
              <Input
                type='email'
                placeholder='Where can I reach you? ...'
                className='text-md-regular lg:text-lg-regular focus:border-primary-300 h-auto rounded-none border-x-0 border-t-0 border-b border-neutral-900 bg-transparent px-2 py-4 tracking-[-0.02em] text-white shadow-none placeholder:text-neutral-500 focus-visible:ring-0 lg:p-4'
              />
            </div>

            {/* Message */}
            <div className='flex flex-col gap-2 lg:gap-3'>
              <Label className='text-sm-bold lg:text-md-bold text-neutral-25 tracking-[-0.02em]'>
                Message<span className='text-[#ee1d52]'>*</span>
              </Label>
              <Input
                type='text'
                placeholder='Tell me about your project or just say hi :) ...'
                className='text-md-regular lg:text-lg-regular focus:border-primary-300 h-auto rounded-none border-x-0 border-t-0 border-b border-neutral-900 bg-transparent px-2 py-4 tracking-[-0.02em] text-white shadow-none placeholder:text-neutral-500 focus-visible:ring-0 lg:p-4'
              />
            </div>

            <Button variant='nav' type='submit' className='h-12 w-full'>
              Let&apos;s Build Something
            </Button>
          </form>
        </div>
      </FadeUp>
    </section>
  );
}
