export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Construction Manager',
    company: 'BuildRight Constructions',
    content: 'Whytal Ultra Plaster has significantly improved our project completion times. The quality is consistently excellent.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3'
  },
  {
    name: 'Priya Sharma',
    role: 'Interior Designer',
    company: 'Design Studios',
    content: 'The finish quality of Whytal products is outstanding. It gives our designs the perfect canvas to work with.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3'
  },
  {
    name: 'Mohammed Ali',
    role: 'Project Director',
    company: 'Ali Builders',
    content: 'We have been using Whytal products for over 5 years. Their consistency and quality are unmatched in the market.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3'
  },
  {
    name: 'Anita Desai',
    role: 'Architect',
    company: 'Modern Spaces',
    content: 'The thermal properties and crack resistance of Whytal plaster make it our go-to choice for premium projects.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3'
  },
  {
    name: 'Suresh Patel',
    role: 'Site Supervisor',
    company: 'Patel Constructions',
    content: 'Easy application and excellent workability. Our team loves working with Whytal products.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3'
  },
  {
    name: 'Lakshmi Menon',
    role: 'Property Developer',
    company: 'Green Homes',
    content: 'The eco-friendly nature of Whytal products aligns perfectly with our sustainable building practices.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3'
  }
];