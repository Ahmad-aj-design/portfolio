import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

/*import GithubIcon from '../components/Icon/GithubIcon';*/
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
/*import StackOverflowIcon from '../components/Icon/StackOverflowIcon';*/
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
/*import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';*/
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ahmed Portfolio',
  description: "Ahmed Resume, Frontend Developer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Ahmed.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Frontend Developer</strong>, 
        focused on building responsive, user-friendly websites with clean design 
        and efficient code. I enjoy solving problems through code and keeping up 
        with new <strong className="text-stone-100">web technologies</strong>.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg mt-4">
        Outside of coding, I enjoy exploring 
        <strong className="text-stone-100"> design inspiration </strong> 
        and keeping up with the latest trends in 
        <strong className="text-stone-100"> web technologies</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};


/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description:`I’m a Frontend Developer passionate about creating clean, responsive, and user-friendly websites. My favorite tools are HTML, CSS, JavaScript, and React , which I use to bring designs to life and build smooth digital experiences. 
  I enjoy problem-solving, learning new technologies, and I take pride in writing code that is both efficient and easy to maintain. Outside of coding, I’m curious, detail-oriented, and always looking for ways to grow and improve as a developer.`,
  aboutItems: [
    {label: 'Location', text: 'Nigeria', Icon: MapIcon},
    /*{label: 'Age', text: '29', Icon: CalendarIcon},*/
   /* {label: 'Nationality', text: 'Nigerian', Icon: FlagIcon},*/
    {label: 'Interests', text: 'Tech, Fashion, Football', Icon: SparklesIcon},
    {label: 'Study', text: 'Ahmadu Bello University Zaria', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Student', Icon: BuildingOffice2Icon},
  ],
};
/**
 * Skills section
 */
export const skills: SkillGroup[] = [
 
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'Tailwind CSS',
        level: 3,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 3,
      },
      {
        name: 'SQL',
        level: 5,
      },
      {
        name: 'Restful',
        level: 4,
      },
    ],
  },
  {
    name: 'Data Analysis',
    skills: [
      {
        name: 'Phyton',
        level: 7,
      },
      {
        name: 'Data Visualization',
        level: 5,
      },
      {
        name: 'Statistical Analysis',
        level: 3,
      },
    ],
  },
];


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
   {
    title: 'Total Organic Carbon Dashboard  ',
    description: 'A data visualization dashboard for analyzing Total Organic Carbon in water and petroleum samples. Built with JavaScript, React, and Chart.js on the frontend, with a Python backend (Pandas, NumPy, Scikit-learn) and SQLite for data storage. It tracks quality trends, detects anomalies, and provides insights through an intuitive interface.',
    url: 'https://github.com/Ahmad-aj-design/TOC_Dashboard',
    image: porfolioImage1,
  },
  {
    title: 'Employee Leave Management System',
    description: 'During my internship, I contributed to the development of an Employee Leave Management System. I worked mainly on the frontend using React, Tailwind CSS, and TypeScript, where I helped build responsive interfaces for managing leave requests and approvals. I also participated in testing the application using Selenium to ensure functionality and usability. This project improved HR efficiency by automating leave tracking and simplifying approvals.',
    url: '',
    image: porfolioImage2,
  },
  /*{
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },*/
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
 {
    date: 'August 2025',
    location: 'Ahmadu Bello Univerity, Zaria',
    title: 'Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'July 2021',
    location: 'Nacabs polytechnic Akwanga',
    title: 'Diploma in Computer Engineering',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2024 - December 2024',
    location: 'NNPC Abuja (Research Innovation Technology)',
    title: 'Intern',
    content: (
      <p>
        Gained hands-on experience across multiple projects, including building a company website, developing an Augmented Reality application, performing data analysis, and contributing to an Employee Management System (frontend and testing). Also provided technical support, which strengthened my problem-solving and teamwork skills.
      </p>
    ),
  },
  {
    date: 'August 2020 - June 2021',
    location: 'FCDA Abuja (Information Communication)',
    title: 'Intern',
    content: (
      <p>
        Proided tecnical support, Worked and gain hands on experience on Networking, Communicated effectively with Faculty and accepted 
        critiques and suggestions for areas of improvement.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
   {
      name: 'Amdi Salam',
      text: 'Your talent, humility, and loyalty show in all that you do, and your curiosity and dedication are truly inspiring. You’re doing well—keep it up!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Dr Fodio',
      text: 'You’re motivated, creative, and skilled, and you consistently deliver high-quality work. It’s a pleasure to see your progress.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I’m always happy to connect and chat about projects, ideas, or opportunities. If you’d like to reach out, you can email me or send me a message on LinkedIn at the link below. I look forward to hearing from you!.',
  items: [
    {
      type: ContactType.Email,
      text: 'yahayaahmed346@gmail.com',
      href: 'mailto:yahayaahmed346@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Abuja, Nigeria',
    },
    {
      type: ContactType.LinkedIn,
      text: 'yahaya-ahmed',
      href: 'https://www.linkedin.com/in/yahaya-ahmed-521b12268',
    },
    {
      type: ContactType.Github,
      text: 'Ahmad-aj-design',
      href: 'https://github.com/Ahmad-aj-design',
    },
  ],
};
/**
 * Social items
 */
export const socialLinks: Social[] = [
  
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yahaya-ahmed-521b12268'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ajsgram__/'},
  {label: 'Twitter', Icon: TwitterIcon, href: ''},
];

