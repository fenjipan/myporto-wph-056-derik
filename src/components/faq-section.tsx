'use client';

import { motion } from 'framer-motion';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { FAQ_ITEMS } from '@/constants/faq-data';

export default function FAQSection() {
  return (
    <section id='faq' className='px-4 py-10 lg:px-30 lg:py-[80px]'>
      <div className='mx-auto max-w-300'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='mb-6 text-center lg:mb-16'
        >
          <h2 className='display-sm-bold lg:display-2xl-bold tracking-[-0.03em] text-white'>
            Frequently Asked Questions
          </h2>
          <p className='text-md-regular lg:text-lg-regular mt-2 tracking-[-0.02em] text-neutral-400 lg:mt-4'>
            Got questions? Here are the answers to the ones we get asked the
            most.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <Accordion type='single' defaultValue='item-0' collapsible>
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.06 * i, ease: 'easeOut' }}
            >
              <AccordionItem value={`item-${i}`} className='border-b-0'>
                <AccordionTrigger className='text-xl-semibold text-neutral-25 py-4 hover:no-underline [&>svg]:size-6 [&>svg]:text-neutral-400'>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className='text-md-regular pb-4 tracking-[-0.03em] text-neutral-400'>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
              {i < FAQ_ITEMS.length - 1 && (
                <Separator className='bg-neutral-800' />
              )}
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
