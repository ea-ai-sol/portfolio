import { Experience, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Farrukh Iqbal",
  title: "Innovative Solution Engineering ❖ Tech Delivery Leadership ❖ Enterprise Strategy & Architecture",
  summary: "Senior technology leader with 20 years of ICT experience delivering complex solutions across banking, airlines, telecommunications, education, tourism, and healthcare. Recognised for driving end-to-end delivery across on-prem and cloud environments, optimising costs, and improving reliability through modern engineering practices (CI/CD, DevSecOps, cloud enablement) now a trend leading contributor to AI. Influential communicator who builds trust with executive stakeholders and leads high-performing, multicultural teams across multiple demographics. Strengths include strategy, architecture, governance, engineering, product lifecycle leadership, and applying AI smarts to create scalable, data-driven, measurable business outcomes.",
  phone: "+61-424263435",
  location: "Sydney, NSW",
};

export const EXPERIENCES: Experience[] = [
  {
    company: "University of New South Wales (UNSW)",
    location: "NSW, Australia",
    roles: [
      {
        title: "Enterprise Architect – AI",
        period: "November 2024 to Present",
        description: [
          "Orchestrated UNSW’s AI ecosystem combining governance, platforms, delivery and partnerships so teaching, research and administration could adopt AI safely and at scale.",
          "Led the AI Services Framework project, delivering an AI Capability Model & Reference Architecture for Agentic and Generative AI.",
          "Maintained rolling architecture artifacts and integration standards aligned with enterprise guidelines.",
          "Established the AI CoE operating model with central intake/prioritisation and gated transitions (POC → Pilot → Prod).",
          "Unified a 10-domain AI Capability Model with a cloud-agnostic reference architecture (AWS + Azure).",
          "Built foundational AI governance: ethical principles, compliance checklists, and interoperability guidelines.",
          "Delivered a tooling framework for ChatGPT, M365 Copilot, Azure AI Foundry, and AWS Bedrock.",
          "Designed and piloted AI agents: Guardrails Bot, Cyber Security Bots, Student Help Bot, etc.",
          "Delivered solutions across portfolios with ~25% efficiency uplift."
        ]
      },
      {
        title: "Senior Solution Architect – Education Solutions",
        period: "June 2023 to November 2024",
        description: [
          "Responsible for building and supporting University’s Teaching and Learning Enterprise Applications.",
          "Curated 9+ enterprise solutions in a year with 100% governance approval.",
          "Solutions ranged from SaaS, IaaS, PaaS to Generative AI based MS Power Platform & Co-pilot solutions.",
          "Developed architecture artifacts: current/future state, roadmaps, patterns, and blueprints.",
          "Involved in procurement processes, market scanning, and coordinating with Gartner for future trends."
        ]
      }
    ]
  },
  {
    company: "Westpac New Zealand",
    location: "Auckland, New Zealand",
    roles: [
      {
        title: "Services Delivery Owner – Software Factory",
        period: "June 2021 to June 2023",
        description: [
          "Technical Product Management role owning DevSecOps and delivery of multiple observability platforms.",
          "Consistently rated a stand-out performer with a special COO nomination.",
          "Accountable for multi-cloud/hybrid iPaaS platforms in APM and Incident Management domains.",
          "Managed platforms: Splunk, Dynatrace, PagerDuty, Bitbucket, Artifactory, Elastic, Jenkins, Azure, AWS, ServiceNow.",
          "Reduced MTTD/MTTR with a 35% improvement in on-call resolution time."
        ]
      }
    ]
  },
  {
    company: "Air New Zealand",
    location: "Auckland, New Zealand",
    roles: [
      {
        title: "Platforms Product Manager [APIs, Integration & Developer Platforms]",
        period: "September 2020 to June 2021",
        description: [
          "Led a large portfolio of platform products as a single delivery owner, managing 6 direct reports and 20+ matrixed staff.",
          "Responsible for multi-cloud platforms (API & Integration, Development Platforms) with a ~$4M budget.",
          "Led development and maintenance of API Gateway, AWS Cloud, Web Services, Containerized Apps, CI/CD, and UX platforms.",
          "Managed relationships with partners like IBM, Datacom, NTT, and Cognizant."
        ]
      }
    ]
  },
  {
    company: "The University of Auckland",
    location: "Auckland, New Zealand",
    roles: [
      {
        title: "Associate Director Applications [secondment]",
        period: "January 2020 to September 2020",
        description: [
          "Reported directly to CTO, leading Strategy, Transformation, and Delivery for Technology communities.",
          "Managed a budget line of $23 million.",
          "Developed a 3-year strategic roadmap for digital recovery during the Covid crisis.",
          "Recipient of Vice Chancellor’s Recognition award."
        ]
      },
      {
        title: "Software Development Manager",
        period: "June 2017 to December 2019",
        description: [
          "Managed a team of 30+ Developers and Technical Leads across 11 functional areas.",
          "Transformed delivery teams to become DevOps and SAFe capable.",
          "Sustained 13 Value Streams Applications and drove Cloud (AWS, Azure) modernization.",
          "Revamped Software Development Brand and hiring/onboarding processes."
        ]
      },
      {
        title: "Technical Solutions Architect",
        period: "September 2016 to May 2017",
        description: [
          "Architected APIs & Integration solutions affecting all functional areas of the University.",
          "Engaged in RFP processes, vendor selection, and business case creation.",
          "Provided end-to-end solution designs for Campus Card, Finance, and Travel systems."
        ]
      }
    ]
  },
  {
    company: "Orion Health Systems",
    location: "Auckland, New Zealand",
    roles: [
      {
        title: "Senior Technical Team Leader",
        period: "January 2014 to September 2016",
        description: [
          "Led a team of Solution Engineers on the Orion Open Platform (Amadeus) for Precision Medicine.",
          "Owned standard off-the-shelf HIE solutions and related AWS cloud infrastructure.",
          "Managed Agile-based team in the Spotify model with fortnightly sprints.",
          "Focused on architecture and design of backend integration, automation, and performance testing."
        ]
      },
      {
        title: "Implementation Consultant",
        period: "September 2013 to January 2014",
        description: [
          "Consultant for North America Region, working on Clinical Software solutions.",
          "Worked on XDS CCD/CCDA & HL7 message processing in Clinical Data Repository.",
          "Designed optimum routes and integration points for solution implementation."
        ]
      }
    ]
  },
  {
    company: "DiGi Telecommunications Sdn Bhd",
    location: "Malaysia",
    roles: [
      {
        title: "Associate Principal Consultant",
        period: "April 2012 to August 2013",
        description: [
          "Led user requirements, workshop facilitation, and business process transformation.",
          "Owned solution design for large-scale BSS & VAS swaps (convergent billing, CRM, SDP).",
          "Served as Technical Lead across application feasibility and end-to-end development.",
          "Led e-commerce and digital storefront integration."
        ]
      }
    ]
  },
  {
    company: "TELENOR Pakistan",
    location: "Islamabad, Pakistan",
    roles: [
      {
        title: "Delivery Lead [Solution Design & Software Development]",
        period: "March 2008 to April 2012",
        description: [
          "Developed Enterprise Service Bus based on SOA for 30 million subscribers.",
          "Launched payment API and SMS Messaging API for social network providers.",
          "Supervised development of Mobile Banking EASYPAISA platform."
        ]
      },
      {
        title: "Developer [VAS]",
        period: "April 2007 to March 2008",
        description: [
          "Rolled out SDP CSF1.2 (Oracle) and ParlayX gateway.",
          "Managed day-to-day operations of Messaging & Charging systems.",
          "Deployed FnF Products and CRM & Mediation Integration."
        ]
      }
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "MBA - [IT major]",
    year: "2005",
    institution: "International Islamic University, Islamabad"
  },
  {
    degree: "BBA(Hons) – [IT major with Distinction]",
    year: "2004",
    institution: "International Islamic University, Islamabad"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "TOGAF Enterprise Architecture Foundation", issuer: "The Open Group" },
  { name: "TOGAF Enterprise Architecture Practitioner", issuer: "The Open Group" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "Azure Fundamentals", issuer: "Microsoft" },
  { name: "PMI-ACP", issuer: "Project Management Institute" },
  { name: "AI Fundamentals", issuer: "UNSW" },
  { name: "Generative AI and its Business Applications", issuer: "UNSW" },
  { name: "CAUDIT Leadership Institute", issuer: "CAUDIT" }
];
