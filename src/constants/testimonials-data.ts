export interface Testimonial {
  company: string;
  logo: string;
  quote: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    company: 'airbnb',
    logo: '/icons/airbnb-white.svg',
    quote:
      '"Edwin delivered clean and efficient code that made our app load faster and feel smoother. He\'s a pleasure to work with."',
    name: 'Sarah Liem',
    role: 'Product Manager at Techlynk',
  },
  {
    company: 'coinbase',
    logo: '/icons/coinbase.svg',
    quote:
      '"Edwin delivered clean and efficient code that made our app load faster and feel smoother. He\'s a pleasure to work with."',
    name: 'Sarah Liem',
    role: 'Product Manager at Techlynk',
  },
  {
    company: 'webflow',
    logo: '/icons/webflow-white.svg',
    quote:
      '"Edwin delivered clean and efficient code that made our app load faster and feel smoother. He\'s a pleasure to work with."',
    name: 'Sarah Liem',
    role: 'Product Manager at Techlynk',
  },
];
