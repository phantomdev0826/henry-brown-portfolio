import { StaticImageData } from 'next/image';

export interface Blog {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly image: StaticImageData;
  readonly publishAt: string;
  readonly link: string;
} 