export const contactInfo = {
  name: "Kakha Urigashvili",
  description: "Resume website",
  links: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kakha-urigashvili-2aa43a60/',
      svg: "M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
    },
    {
      name: 'email',
      url: 'mailto:kurigashvili@gmail.com',
      svg: "M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"
    }
  ],
  printLinks: [
    {
      name: 'email',
      display: 'kurigashvili@gmail.com',
      url: 'mailto:kurigashvili@gmail.com'
    },
    {
      name: 'phone',
      display: '(616) 648-5929',
      url: 'tel:616-648-5929'
    }
  ]
};

export const sections = {
  skills: {
    name: "Skills",
    href: '#skills',
    items: [
      { name: "Node.js" },
      { name: "JavaScript" },
      { name: "Typescript" },
      { name: "React" },
      { name: "Python" },
      { name: "AWS" },
      { name: "Kubernetes" },
      { name: "Docker" },
      { name: "Spark" },
      { name: "CICD" },
    ],
  },
  experience: {
    name: "Experience",
    href: '#experience',
    items: [
      {
        company: "GoDaddy",
        title: "Lead Software Engineer",
        location: "Seattle",
        dates: "Feb 2022 - Present",
        description: [
          "Sole maintainer of EKS (Kubernetes) cluster shared by multiple teams. Created automated process to for zero downtime cluster upgrades. Installed and configured numerous tools for scalability, observability, functionality of the cluster: Cluster Autoscaler, AWS External Secrets, Fluent Bit, Elastic Metricbeat.",
          "Created a self-hosted GitHub Actions runner with an autoscaling tool as part of an internal open-source project adopted by the entire company.",
          "Successfully performed a zero-downtime migration of multiple microservices between AWS Accounts. The migration included transferring DynamoDB tables and S3 buckets, in addition to migrating the application itself.",
        ],
      },
      {
        company: "GoDaddy",
        title: "Senior Software Engineer",
        location: "Seattle",
        dates: "Feb 2021 - Feb 2022",
        description: [
          "Involved in developing and maintaining 10+ microservices written in Node.js/TypeScript. The microservices are responsible for the checkout process on an e-commerce website.",
          "Significantly automated the CI/CD process for the team's monorepo, reducing the deployment process from a couple of hours and 15+ clicks to a single-click deployment.",
          "Successfully migrated the payment processing functionality from a legacy monolith service to new dedicated microservices.",
        ],
      },
      {
        company: "Amazon",
        title: "Software Engineer, SDE II",
        location: "Seattle",
        dates: "Jan 2020 - Feb 2021",
        description: [
          "Working on tools and SDKs for Alexa custom skills development.",
          "I was involved in the development of Alexa CLI v2, where I designed and implemented a process to automatically generate 100+ CLI commands from Swagger docs, eliminating the need for manual commands as in v1.",
        ],
      },
      {
        company: "SpotHero",
        title: "Senior Software Engineer",
        location: "Chicago",
        dates: "Oct 2019 - Jan 2020",
        description: [
          "Created an automated process to sync data between payment systems using Kubernetes, Airflow, and Kotlin.",
        ],
      },
      {
        company: "Conversant Media",
        title: "Senior Software Engineer",
        location: "Chicago",
        dates: "Dec 2016 - Oct 2019",
        description: [
          "Developed a Web API using Node.js and an Admin Portal using Angular 4. These components were responsible for configuring custom statistical models used to serve customized advertisements. The development process extensively utilized modern libraries, followed a consistent code style, and adhered to a microservices architecture.",
          "Led the creation of the company's Docker infrastructure from scratch, using Docker Swarm and Traefik. This infrastructure provided a scalable and efficient solution for containerization",
          "Fully automated the CI/CD process for multiple projects using Docker and Bamboo. This automation significantly reduced the development team's time spent on build and deployment by at least 90%, streamlining the overall development workflow.",
        ],
      },
    ],
  },
  education: {
    name: "Education",
    href: '#education',
    items: [
        {
            school: 'Harvard Extension School',
            degree: 'Master of Information Management Systems',
            dates: '2015 - 2019',
            gpa: 3.96
        },
        {
            school: 'Davenport University',
            degree: 'Bachelor of Business Administration in Finance',
            dates: '2007 - 2011',
            gpa: 3.92
        }
    ]
  },
  printResume: {
    name: "Print Resume",
    href: 'javascript:if(window.print)window.print()'
  },
};
