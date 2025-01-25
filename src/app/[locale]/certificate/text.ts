import { ASSETS } from '@/common';
import { Certifications } from '@/containers/certification-list';

type CertificationText = {
  title: string;
  description: string;
  certifications: Certifications;
  footer: string;
};

const CERTIFICATION_TEXT: CertificationText = {
  title: 'Certified & Ready',
  description: 'These aren\'t just certifications. Oh no. They’re *gym badges* of the cloud world. And let’s be honest, some of them were harder to obtain than defeating a Level 100 Mewtwo with a team of Magikarp.',
  certifications: {
    aws: {
      architect: {
        title: 'Certificate of Completion: Advanced Architecting on AWS',
        description: 'This certification demonstrates my deep understanding of AWS architecture, with the ability to design complex, scalable, and highly available systems. In other words: I know how to make your cloud feel like home.',
        icon: ASSETS.CERTIFICATIONS.architect.icon,
        cert: ASSETS.CERTIFICATIONS.architect.cert,
      },
      serverless: {
        title: 'Certificate of Completion: Developing Serverless Solutions on AWS',
        description: 'Who needs servers anyway? This certification proves I can design, develop, and deploy serverless applications using AWS Lambda and other AWS services. No servers, no problem!',
        icon: ASSETS.CERTIFICATIONS.serverless.icon,
        cert: ASSETS.CERTIFICATIONS.serverless.cert,
      },
      devops: {
        title: 'Certificate of Completion: DevOps Engineering on AWS',
        description: 'Certified to streamline development and operations with AWS tools, automation, and best practices. Think of it as making code deployment smoother than butter.',
        icon: ASSETS.CERTIFICATIONS.devops.icon,
        cert: ASSETS.CERTIFICATIONS.devops.cert,
      },
      kubernetes: {
        title: 'Certificate of Completion: Running Containers on AmazonEKS',
        description: 'Kubernetes? No problem. With this certificate, I can run and manage containers on Amazon EKS like a pro. Containerized apps have never been so organized and efficient!',
        icon: ASSETS.CERTIFICATIONS.kubernetes.icon,
        cert: ASSETS.CERTIFICATIONS.kubernetes.cert,
      },
      data_sience: {
        title: 'Certificate of Completion: Practical Data Science with Amazon SageMaker',
        description: 'From data wrangling to model training, I learned how to harness the power of machine learning using Amazon SageMaker. It’s basically the science of turning data into predictions (and hopefully insights!).',
        icon: ASSETS.CERTIFICATIONS.data_sience.icon,
        cert: ASSETS.CERTIFICATIONS.data_sience.cert,
      },
      well_architect: {
        title: 'Certificate of Completion: Advanced AWS Well-Architected Best Practices',
        description: 'With this one, I learned the fine art of building AWS solutions that are secure, cost-efficient, and operationally excellent. Because a well-architected cloud is a happy cloud!',
        icon: ASSETS.CERTIFICATIONS.well_architect.icon,
        cert: ASSETS.CERTIFICATIONS.well_architect.cert,
      },
      cloud_operations: {
        title: 'Certificate of Completion: Cloud Operations on AWS',
        description: 'Managing and optimizing AWS infrastructure is what this certification is all about. I’ve learned how to keep everything running smoothly, so you can rest easy knowing your cloud operations are in good hands.',
        icon: ASSETS.CERTIFICATIONS.cloud_operations.icon,
        cert: ASSETS.CERTIFICATIONS.cloud_operations.cert,
      },
    },
  },
  footer: 'With these gym badges—err, I mean certifications—under my belt, I’m ready for the next *elite* challenge. Who knows, maybe one day I’ll become the champion of the cloud world... or at least of the AWS certifications.',
};

export { CERTIFICATION_TEXT };
