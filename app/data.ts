export const contactInfo = {
  name: "Kakha Urigashvili",
  description: "Resume website",
  links: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/kurigashvili",
      svg: "M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z",
    },
    {
      name: "email",
      url: "mailto:kurigashvili@gmail.com",
      svg: "M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z",
    },
  ],
  printLinks: [
    {
      name: "email",
      display: "kurigashvili@gmail.com",
      url: "mailto:kurigashvili@gmail.com",
    },
    {
      name: "phone",
      display: "(616) 648-5929",
      url: "tel:616-648-5929",
    },
  ],
};

export const sections = {
  experience: {
    name: "Experience",
    href: "#experience",
    action: null,
    items: [
      {
        company: "GoDaddy",
        title: "Lead Software Engineer",
        location: "Austin, TX",
        dates: "Feb 2021 - Present",
        description: [
          "Created a multi-regional, highly scalable HTTP RESTful API with auto-failover as part of the AI GoDaddy initiative called GoAddy Airo. The microservice utilized the following technologies: Serverless framework, DynamoDB, and AWS Route 53.",
          "Primary maintainer of an EKS (K8s/Kubernetes) cluster shared by multiple teams. Created automated processes for zero downtime cluster upgrades and creation, making the process about 95% faster and 99% less bug-prone compared to the previous semi-manual process. The cluster is configured with numerous tools for scalability, observability, and functionality including Cluster Autoscaler, AWS External Secrets, Fluent Bit for shipping logs to Elasticsearch, and Elastic Metricbeat for monitoring node and pod health.",
          "Created a self-hosted GitHub Actions runner with an autoscaling tool as part of an internal open-source project adopted by the entire company. The reusable solution comprised 5 AWS Lambdas (Node.js), a Kinesis stream, a webhook, and an EC2 Autoscaling group. The solution provided approximately 70% cost savings compared to previous solutions that used a static set of runners.",
          "Architected and implemented a high-performance caching proxy that improved response times by 20x for frequent requests and successfully handled massive traffic spikes during GoDaddy's SuperBowl commercial campaign, ensuring zero downtime during peak demand.",
        ],
      },
      {
        company: "GoDaddy",
        title: "Senior Software Engineer",
        location: "Kirkland, WA",
        dates: "Feb 2021 - Feb 2022",
        description: [
          "Successfully performed a zero-downtime migration of 5+ microservices between AWS Accounts. The migration included transferring DynamoDB tables and S3 buckets, in addition to migrating the application itself. The migrations reduced AWS costs by about 15% due to consolidating AWS Accounts.",
          "Reduced the time for finding root causes of production bugs from an average of 1 hour to 10 minutes by improving/introducing various tools and processes for application monitoring. For example: APM log correlation, custom APM traces for message queues, and a custom Slack Bot for finding the root cause of production alerts.",
          "Improved the reliability of integration tests, decreasing flakiness by 95%. One of the apps is written in Ruby on Rails and uses Selenium for integration testing. Another one is written with Node.js/TypeScript and uses Cypress tests.",
          "Significantly improved the CI/CD process for the team's owned applications. For example, in a monorepo written with 10 microservices, deployment was improved from 15 clicks to 1 click (3 hours deployment vs. 30 minutes). Another example is a legacy SaaS Ruby on Rails application with a sharded multi-tenant MySQL backend, where deployment was improved from 2 hours to 30 minutes with one-click prod deployment."
        ],
      },
      {
        company: "Amazon",
        title: "Software Engineer, SDE II",
        location: "Seattle, WA",
        dates: "Jan 2020 - Feb 2021",
        description: [
          "Worked on a cross-functional team responsible for open-source tools (SDKs, CLI) for developers of Alexa custom skills. The tools were written in TypeScript (Node.js), Java, and Python. I helped to onboard over 20 new API methods to the Alexa SDK.",
          "Helped architect and develop Alexa CLI v2, where I designed and implemented a process to automatically generate 100+ CLI commands from Swagger docs, eliminating the need for manual commands as in v1. It yielded about a 95% reduction in the time required to onboard new commands compared to v1 of the CLI.",
          "Created a serverless microservice for receiving and tracking telemetry data for Alexa CLI v2."
        ],
      },
      {
        company: "SpotHero",
        title: "Senior Software Engineer",
        location: "Chicago, IL",
        dates: "Oct 2019 - Jan 2020",
        description: [
          "Created an automated process to sync data between payment systems using Kubernetes, Airflow, and Kotlin.",
        ],
      },
      {
        company: "Conversant Media",
        title: "Senior Software Engineer",
        location: "Chicago, IL",
        dates: "Dec 2016 - Oct 2019",
        description: [
          "Developed backend and frontend for a microservice responsible for updating a Machine Learning Model on the Ad Server. The microservice served as a proxy layer, allowing the Analytical team to quickly and safely update, create, and tune models used for serving advertisements. This led to a 95% increase in the velocity related to model updates.",
          "Served as one of the technical leaders in the effort to migrate engineering teams to use Dockerized on-premise infrastructure. The project took about one year, during which we successfully migrated approximately 30 legacy applications and created 20 new applications. The speed of deployment increased by at least 60% across three engineering organizations, totaling above 150 engineers. Additionally, we achieved extensive standardization of CI/CD practices across a high number of teams.",
          "Created a microservice RESTful API used for serving aggregated business intelligence dashboards. The technologies used were TypeScript, Redis, and PostgreSQL. We were able to achieve approximately a 90% quicker dashboard loading time compared with the Tableau approach."
        ],
      },
    ],
  },
  skills: {
    name: "Skills",
    href: "#skills",
    action: null,
    items: [
      { "name": "Node.js" },
      { "name": "TypeScript" },
      { "name": "JavaScript" },
      { "name": "AWS" },
      { "name": "Kubernetes" },
      { "name": "CICD" },
      { "name": "Python" },
      { "name": "Git" },
      { "name": "Elasticsearch" },
      { "name": "Redis" },
      { "name": "Apache Kafka" },
      { "name": "Redshift" },
      { "name": "Go" },
      { "name": "PostgreSQL" },
      { "name": "MySQL" },
      { "name": "Cypress" },
      { "name": "Serverless" },
      { "name": "GraphQL" },
      { "name": "SQL" },
      { "name": "Data Ingestion" },
      { "name": "Agile" },
      { "name": "SQS" },
      { "name": "SNS" },
      { "name": "React" },
      { "name": "HTML/CSS" },
      { "name": "Terraform" },
      { "name": "CDK" },
      { "name": "Test-Driven Development" },
      { "name": "Unit and Integration Testing" },
      { "name": "Basic Machine Learning" },
      { "name": "Gen AI" },
    ],
  },
  education: {
    name: "Education",
    href: "#education",
    action: null,
    items: [
      {
        school: "Harvard Extension School",
        degree: "Master of Information Management Systems",
        dates: "2015 - 2019",
        gpa: 3.96,
      },
      {
        school: "Davenport University",
        degree: "Bachelor of Business Administration in Finance",
        dates: "2007 - 2011",
        gpa: 3.92,
      },
    ],
  },
  certifications: {
    name: "Licenses and Certifications",
    href: "#certifications",
    action: null,
    items: [
      {
        name: "Mathematics for Machine Learning: PCA",
        issuer: "Imperial College London",
        credentialId: "DY79VC1D1STL",
      },
      {
        name: "AWS Certified Developer - Associate",
        issuer: "Amazon Web Services (AWS)",
        credentialId: "XR1YXYEBCM1Q1KC3",
      },
      {
        name: "AWS Certified Machine Learning - Specialty",
        issuer: "Amazon Web Services (AWS)",
        credentialId: "LEFEKYCLBN1Q1D59",
      },
      {
        name: "Docker Certified Associate",
        issuer: "Docker, Inc",
        credentialId: "12146552",
      },
      {
        name: "Microsoft Certified Professional",
        issuer: "Microsoft",
        credentialId: "10742085",
      },
    ],
  },
  printResume: {
    name: "Print Resume",
    href: "#",
    action: "PRINT",
  },
};
