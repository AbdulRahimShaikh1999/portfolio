import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Engineer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Infrastructure as Code",
    icon: backend,
  },
  {
    title: "Monitoring & Automation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "RAM tracking",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    points: [
      "Collaborated with senior DevOps engineer to establish foundational \textbf{AWS infrastructure}, improving scalability and operational reliability for the Canadian side of the application as part of the sales process.",
      "Reduced environment setup time by ~ 35% by provisioning and managing cloud resources with Terraform for IaC / Infrastructure as Code and leveraging version-controlled state files for reproducibility across deployments.",
      "Improved release stability by ~ 30% by building and optimizing GitHub Actions CI/CD pipelines defined through YAML workflows, integrating build runners and automated testing workflows.",
      "Cut manual maintenance effort by ~ 25% by developing lightweight Python automation scripts to streamline log analysis and resource cleanup through CloudWatch and CloudTrail",
      "Created portable build artifacts by containerizing core application components with Docker, ensuring consistent testing environments and improving developer onboarding speed.",
      "Enhanced system visibility and uptime by implementing Lambda-based automation for periodic health checks and report generation.",

    ],
  },
  {
    title: "Business Operations & Process Automation",
    company_name: "Jadeed",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Nov 2024",
    points: [
      "Designed, developed, and maintained the company’s website using React and modern UI frameworks, ensuring consistent branding and user experience across devices.",
      "Deployed and managed the website through AWS services (S3, CloudFront, Route 53), optimizing uptime, speed, and global accessibility",
      "Implemented form handling and customer inquiry workflows using AWS Lambda and API Gateway integrations, improving response times and reliability",
    ],
  },
  {
    title: "AWS Frontend Developer ",
    company_name: "Canada Border Services Agency",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jul 2023 - Oct 2023",
    points: [
      "Developed and maintained responsive React interfaces with modular components, integrating REST APIs and AWS-hosted services for dynamic content delivery.",
      "Implemented UI enhancements, accessibility fixes, and performance optimizations based on JIRA tickets and user feedback across multiple feature releases.",
      "Utilizing tools such as , Git, Github, Redux, Figma, and CloudFront to manage state, streamline collaboration, and deliver consistent, high-quality user experiences.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Cloud Cost Optimization and Monitoring",
    description:
      "Designed and deployed a serverless cost-optimization pipeline on AWS using Terraform, Lambda, and DynamoDB to automatically detect and shut down idle EC2/S3 resources, improving operational efficiency and cloud governance",
    tags: [
      {
        name: "Terraform",
        color: "blue-text-gradient",
      },
      {
        name: "Github Actions",
        color: "green-text-gradient",
      },
      {
        name: "Amazon Bedrock",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://medium.com/@abdulshaikhr99",
  },
  {
    name: "Vitality Sphere: Serverless Architecture",
    description:
      "Migrated a static website to a serverless architecture using Amazon S3 and CloudFront, improving global content delivery performance and reducing hosting overhead.",
    tags: [
      {
        name: "Amazon S3",
        color: "blue-text-gradient",
      },
      {
        name: "CloudFront",
        color: "green-text-gradient",
      },
      {
        name: "API Gateway",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://medium.com/@abdulshaikhr99/scaling-vitality-sphere-s3-migration-user-tracking-and-ci-cd-automation-80abab04d723",
  },
  {
    name: "High Availability Two-Tier App on AWS",
    description:
      "Deployed a fault-tolerant two-tier application stack using Amazon VPC, EC2 Auto Scaling, and RDS, ensuring seamless recovery from instance failures and high service availability.",
    tags: [
      {
        name: "Amazon VPC",
        color: "blue-text-gradient",
      },
      {
        name: "RDS",
        color: "green-text-gradient",
      },
      {
        name: "Auto Scaling",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://medium.com/@abdulshaikhr99/deploying-a-two-tier-web-architecture-on-aws-ec2-rds-and-joomla-8a287c6ec62a",
  },
];

export { services, technologies, experiences, testimonials, projects };
