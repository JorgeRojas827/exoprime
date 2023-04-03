export interface ICarousel {
  title: string;
  subtitle: string;
  path: string;
}

export const carouselImages: ICarousel[] = [
  {
    title: 'Services beyond expectations',
    subtitle: 'Creating solutions, one customer at a time',
    path: '/images/resource1.jpg',
  },
  {
    title: 'Let us do the dirty work for you!',
    subtitle: 'Simplifying your life, one cleaning at a time.',
    path: '/images/resource2.jpg',
  },
  {
    title: 'Your trusted partner in a cleaner home.',
    subtitle: "Relax, we'll take care of the cleaning!",
    path: '/images/resource3.jpg',
  },
];
