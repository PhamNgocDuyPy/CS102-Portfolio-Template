type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const EMAIL = 'ngocduy.sischcmus@gmail.com'

export const WEB_TITLE = 'Phạm Ngọc Duy - Personal Website'
export const WEB_DESCRIPTION =
  'A personal website showcasing my work and projects.'
export const FOOTER_COPYRIGHT = '© 2025 Pham Ngoc Duy.'
export const FOOTER_LINK = 'https://github.com/PhamNgocDuyPy'

export const NAME = 'Phạm Ngọc Duy'
export const JOB_TITLE = 'SENA ENTERTAINMENT Frontend Intern'
export const DESCRIPTION =
  'I am a passionate designer and developer with a focus on creating beautiful and functional user interfaces especially sicbo and bet sites UI. I have experience in design engineering, front-end development, product design and $1000 pi coin.'

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/dz1dhavd2/image/upload/v1747561053/9fa6334fc8ad92b188dcc3c8d0d7999d_1_tjhrzv.gif',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/dz1dhavd2/image/upload/v1747560582/hot-girl-pttm-20-1615657390286_n7mz5q.webp',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: 'GitHub',
        link: 'https://github.com/PhamNgocDuyPy',
    },
    {
        label: 'LinkedIn', 
        link: 'https://www.linkedin.com/in/phạm-ngọc-duy-8b8a1b1b0/',
  },
]
