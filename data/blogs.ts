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
    title: 'Hygen - Never Repeat your frontend tasks',
    description:
      'As JavaScript developers, we are constantly seeking ways to enhance our productivity and streamline our workflows. One tool that has gained popularity in recent years for its ability to generate consistent, maintainable code is Hygen. In this article, we will explore the fundamentals of Hygen and dive into practical examples of how it can be seamlessly integrated into React projects to automate code generation.',
    image: SpaceCat,
    publishAt: '2023, Nov 15',
    link: 'https://dev.to/__junaidshah/hygen-never-repeat-your-frontend-tasks-1jcb',
  },
  {
    id: 2,
    title: 'Cloud Computing, its Key Concept and Benefits.',
    description:
      'Cloud computing is the delivery of computing services—such as servers, storage, databases, networking, software, analytics, and intelligence—over the internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale. It enables users to innovate faster and complete tasks more efficiently by providing on-demand resources.',
    image: ComingSoon1,
    publishAt: '2025, Feb 5',
    link: 'https://dev.to/onyemuche/cloud-computing-its-key-concept-and-benefits-30pp',
  },
  {
    id: 3,
    title: 'Dear Junior DevOps Me: Please Don’t Do These 10 Things',
    description:
      'I know you’re excited. You’ve just landed that shiny new DevOps role, and your terminal has never looked sexier. You’ve got htop running in one tab, a Jenkins pipeline halfway through deployment in another, and you just discovered what kubectl does.',
    image: ComingSoon2,
    publishAt: '2025, Feb 27',
    link: 'https://dev.to/dev_tips/dear-junior-devops-me-please-dont-do-these-10-things-7g4',
  },
] as const; 