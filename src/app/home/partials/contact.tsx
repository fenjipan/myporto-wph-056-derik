'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';

import { FadeUp } from '@/components/motion';
import SendStatusDialog from '@/components/send-status-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  }

  function handleDialogAction() {
    if (status === 'success') {
      setStatus('idle');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setStatus('idle');
    }
  }

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

          <form onSubmit={handleSubmit} className='flex flex-col gap-5 lg:gap-6'>
            {/* Name */}
            <div className='flex flex-col gap-2 lg:gap-3'>
              <Label className='text-sm-bold lg:text-md-bold text-neutral-25 tracking-[-0.02em]'>
                Name<span className='text-[#ee1d52]'>*</span>
              </Label>
              <Input
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Tell me about your project or just say hi :) ...'
                className='text-md-regular lg:text-lg-regular focus:border-primary-300 h-auto rounded-none border-x-0 border-t-0 border-b border-neutral-900 bg-transparent px-2 py-4 tracking-[-0.02em] text-white shadow-none placeholder:text-neutral-500 focus-visible:ring-0 lg:p-4'
              />
            </div>

            <Button
              variant='nav'
              type='submit'
              disabled={status === 'loading'}
              className='h-12 w-full'
            >
              {status === 'loading' ? 'Sending...' : "Let's Build Something"}
            </Button>
          </form>
        </div>
      </FadeUp>

      {/* Send status dialog */}
      <SendStatusDialog
        open={status === 'success' || status === 'error'}
        variant={status === 'success' ? 'success' : 'error'}
        onAction={handleDialogAction}
      />
    </section>
  );
}
