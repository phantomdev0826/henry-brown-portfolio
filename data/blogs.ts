import type { Blog } from '@/types/blog';
import ComingSoon1 from '@/public/assets/blog/coming-soon-1.jpg';
import ComingSoon2 from '@/public/assets/blog/coming-soon-2.jpg';
import SpaceCat from '@/public/assets/blog/space-cat.webp';

/**
 * List of blog posts for the portfolio.
 */
export const blogs: readonly Blog[] = [
  {
    id: 1,
    title: 'The Mystery of React Children Re-rendering',
    description:
      'Component rendering is important for the overall performance of the app. So, although it seems simple, I want to share the complex children render logic.',
    image: SpaceCat,
    publishAt: '2024, March 10',
    link: 'https://medium.com/@shinthantequi/the-mystery-of-react-children-re-rendering-3544a68944f4',
  },
  {
    id: 2,
    title: 'Testing 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique sequi ex quisquam ullam corrupti neque dolores ad provident magnam?',
    image: ComingSoon1,
    publishAt: '2022, March 10',
    link: '',
  },
  {
    id: 3,
    title: 'Testing 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique sequi ex quisquam ullam corrupti neque dolores ad provident magnam?',
    image: ComingSoon2,
    publishAt: '2024, January 15',
    link: '',
  },
] as const; 