// Portfolio content; project evidence boundaries are shown in each case study.
const SITE = {
  "firstName": "Syed Hassan",
  "lastName": "Ahmed",
  "initials": "SH",
  "avatar": "avatar.jpg",
  "tagline": "GRC Analyst | IT Risk & Compliance | Information Security | Cloud Security (AWS)",
  "location": "Karachi, Pakistan",
  "email": "s.hassanahmed93@gmail.com",
  "phone": "+92 333 2124852",
  "linkedin": "https://linkedin.com/in/syed-hassan-ahmed-a333bba2",
  "github": "https://github.com/shassanahmed93-rgb",
  "resumePdf": "Syed_Hassan_Ahmed_Resume_2026-11-05.pdf",
  "summary": [
    "Governance, Risk & Compliance (GRC) analyst with a 10-year background in regulated broadcast media, now focused on IT risk management, information security compliance, and cloud security.",
    "AWS Certified Cloud Practitioner, Empire Certified GRC Analyst (ECGRC), and CyberExam Certified GRC Practitioner, with training in ISO/IEC 27001:2022 Implementation, ISO/IEC 27701 (Lead Auditor), SOC 2, NIST CSF 2.0, NIST RMF, and PCI DSS 4.0.1.",
    "Created a GRC portfolio project covering an ISO 31000 risk register, ISMS scope, ISO 27001 Annex A control mapping, security policies, and a GDPR privacy gap assessment. Brings a decade of applied governance experience from a regulated industry: writing and enforcing SOPs, making risk-based decisions under legal and regulatory exposure, managing incident escalation, and briefing executives and regulators."
  ],
  "seeking": [
    "GRC Analyst",
    "IT Risk Analyst",
    "Compliance Analyst",
    "Information Security Analyst"
  ],
  "experience": [
    {
      "company": "Multi Chaos Media",
      "location": "Michigan, USA · Remote",
      "dates": "March 2026 – Present",
      "description": "Cloud-based digital media company delivering animation production, website development, and PPC advertising services.",
      "roles": [
        {
          "title": "GRC Analyst (Remote)",
          "dates": "",
          "points": [
            "Lead governance, risk, and compliance activities for a cloud-hosted creative and digital marketing environment, focusing on client information, campaign data, and production workflows.",
            "Assess risks across cloud infrastructure, web applications, and project delivery; maintain a risk register with likelihood and impact scoring, treatment plans, and accountable owners.",
            "Review customer-database access and data handling practices, supporting least privilege, data classification, encryption requirements, and retention standards.",
            "Perform gap assessments against ISO/IEC 27001:2022, NIST CSF 2.0, and SOC 2; map overlapping controls to support consistent implementation and client security questionnaires.",
            "Develop and maintain policies and procedures covering access control, incident response, acceptable use, and data protection.",
            "Assess vendors, SaaS tools, advertising platforms, and freelancers that handle client or project data; document findings and track remediation.",
            "Support privacy compliance activities relating to GDPR, CCPA, and applicable US state privacy requirements, including data mapping and processing records.",
            "Coordinate evidence collection, internal reviews, and corrective-action tracking; communicate risk and compliance priorities to leadership.",
            "Deliver role-relevant security awareness guidance and work with creative, development, and marketing teams to prioritize cloud security findings and remediation."
          ]
        }
      ]
    },
    {
      "company": "BOL Network",
      "location": "Karachi, Pakistan",
      "dates": "Sep 2016 – Present",
      "roles": [
        {
          "title": "Lead News Producer",
          "dates": "Sep 2019 – Present",
          "points": [
            "Lead editorial governance for daily live and recorded news broadcasts, setting content standards and making real-time, risk-based publishing decisions under legal and regulatory exposure.",
            "Author and enforce standard operating procedures (SOPs) for editorial workflows, incident escalation, and crisis coverage, ensuring consistent, documented decision-making across teams and shifts.",
            "Coordinate escalation during breaking news and crisis events, verifying information, assessing legal and reputational risk, and briefing senior leadership for decisions.",
            "Serve as primary liaison between the newsroom, senior management, external stakeholders, and regulatory bodies, ensuring accurate and compliant information flow under time pressure.",
            "Lead and mentor cross-functional production teams, aligning priorities and resources against strict, non-negotiable on-air deadlines."
          ]
        },
        {
          "title": "Program Manager",
          "dates": "Jul 2017 – Sep 2019",
          "points": [
            "Managed end-to-end delivery of broadcast programs, coordinating internal teams and external stakeholders to ensure on-time, compliant execution.",
            "Monitored risk and quality control across simultaneous productions, identifying issues early and driving corrective action before broadcast."
          ]
        },
        {
          "title": "Producer",
          "dates": "Dec 2016 – Jul 2017",
          "points": [
            "Planned and produced news segments, verifying content accuracy and ensuring adherence to editorial and regulatory standards."
          ]
        },
        {
          "title": "Associate Producer",
          "dates": "Sep 2016 – Nov 2016",
          "points": [
            "Supported senior producers with content research, source verification, and production logistics."
          ]
        }
      ]
    },
    {
      "company": "XLO (Xport Left Overs)",
      "location": "Karachi, Pakistan",
      "dates": "Jul 2020 – Mar 2022",
      "roles": [
        {
          "title": "Founder & Business Owner (E-commerce Apparel)",
          "dates": "",
          "points": [
            "Founded and operated an e-commerce apparel brand, managing supplier relationships, daily operations, and customer-facing risk including fraud prevention and dispute resolution."
          ]
        }
      ]
    },
    {
      "company": "Souda Ghar",
      "location": "Karachi, Pakistan",
      "dates": "Jan 2021 – May 2021",
      "roles": [
        {
          "title": "Senior Marketing Executive",
          "dates": "",
          "points": [
            "Owned brand P&L and marketing strategy for an online grocery platform, balancing growth objectives against operational and reputational risk."
          ]
        }
      ]
    }
  ],
  "projects": [
    {
      "slug": "vendor-risk",
      "name": "Third-Party Risk Assessment",
      "subtitle": "Public-source Notion assessment for a fictional SaaS buyer",
      "tags": [
        "Vendor Due Diligence",
        "Evidence Review",
        "Risk Decisions"
      ],
      "category": "assurance",
      "summary": "Thirty questions, a transparent scoring model and a conditional onboarding decision grounded in public evidence.",
      "points": [
        "Designed a 30-question assessment and reusable questionnaire, distinguishing supported capabilities, partial answers and unknown evidence.",
        "Calculated evidence coverage separately from published support; unresolved critical questions block sensitive-data approval.",
        "Documented sources, contractual and tenant-verification requests, proposed owners and the limits of public-source assurance."
      ],
      "link": "https://github.com/shassanahmed93-rgb/grc-cloud-assurance-project/tree/main/projects/vendor-risk",
      "presentation": {
        "id": "vendor-risk",
        "kind": "Public-source research · Fictional buyer",
        "summary": "Thirty questions, a transparent scoring model and a conditional onboarding decision grounded in public evidence.",
        "image": "projects/vendor-risk/cover.svg",
        "demo": "projects/vendor-risk/",
        "study": "projects/vendor-risk/?view=overview"
      }
    },
    {
      "slug": "aws-soc2",
      "name": "AWS–SOC 2 Evidence Mapping",
      "subtitle": "Selected criterion mappings and evidence collection design",
      "tags": [
        "AWS",
        "SOC 2",
        "Shared Responsibility",
        "Evidence"
      ],
      "category": "cloud",
      "summary": "Twelve control workpapers connect cloud implementation to evidence requirements, tests and assurance limits.",
      "points": [
        "Mapped twelve selected criteria to cloud control procedures, ownership, shared responsibility and evidence requests.",
        "Provided read-only collection tooling with offline dry-run, account verification and output hashing; no live collection was performed.",
        "Kept all live-evidence requests Not collected while using labeled synthetic fixtures to demonstrate review technique."
      ],
      "link": "https://github.com/shassanahmed93-rgb/grc-cloud-assurance-project/tree/main/projects/aws-soc2",
      "presentation": {
        "id": "aws-soc2",
        "kind": "Portfolio simulation · Synthetic evidence",
        "summary": "Twelve control workpapers connect cloud implementation to evidence requirements, tests and assurance limits.",
        "image": "projects/aws-soc2/cover.svg",
        "demo": "projects/aws-soc2/",
        "study": "projects/aws-soc2/?view=overview"
      }
    },
    {
      "slug": "incident-tabletop",
      "name": "Cloud Credential Incident Tabletop",
      "subtitle": "Original scripted scenario with facilitator materials",
      "tags": [
        "Incident Response",
        "Tabletop",
        "Communications"
      ],
      "category": "assurance",
      "summary": "Walk a cloud credential incident through eight injects, model decisions and an evidence-based improvement plan.",
      "points": [
        "Authored eight scenario injects on a fictional 120-minute clock, covering triage, containment, uncertain impact and recovery.",
        "Created a facilitator guide, decision-log and observer templates, plus a sample holding statement and three open improvement actions.",
        "Clearly separated model responses from participant observations; no actual exercise performance or response times are claimed."
      ],
      "link": "https://github.com/shassanahmed93-rgb/grc-cloud-assurance-project/tree/main/projects/incident-tabletop",
      "presentation": {
        "id": "incident-tabletop",
        "kind": "Portfolio simulation · Synthetic evidence",
        "summary": "Walk a cloud credential incident through eight injects, model decisions and an evidence-based improvement plan.",
        "image": "projects/incident-tabletop/cover.svg",
        "demo": "projects/incident-tabletop/",
        "study": "projects/incident-tabletop/?view=overview"
      }
    },
    {
      "slug": "internal-audit",
      "name": "Cloud Controls Mock Internal Audit",
      "subtitle": "Ten fixture-based workpapers and a corrective-action follow-up plan",
      "tags": [
        "Internal Audit",
        "Control Testing",
        "Corrective Actions"
      ],
      "category": "assurance",
      "summary": "Inspect ten audit workpapers and see why missing evidence can change an assurance conclusion.",
      "points": [
        "Built ten workpapers with criteria, populations, samples, evidence links, findings and retest requirements.",
        "Derived two passes, five failures and three inconclusive results from synthetic evidence; a paper recovery result does not prove a technical restore.",
        "Created eight proposed corrective actions with root-cause hypotheses, owners, deadlines and explicit evidence-based closure gates."
      ],
      "link": "https://github.com/shassanahmed93-rgb/grc-cloud-assurance-project/tree/main/projects/internal-audit",
      "presentation": {
        "id": "internal-audit",
        "kind": "Portfolio simulation · Synthetic evidence",
        "summary": "Inspect ten audit workpapers and see why missing evidence can change an assurance conclusion.",
        "image": "projects/internal-audit/cover.svg",
        "demo": "projects/internal-audit/",
        "study": "projects/internal-audit/?view=overview"
      }
    },
    {
      "name": "Cloud Assurance Lab",
      "subtitle": "Synthetic cloud SaaS assurance case study with an interactive executive briefing",
      "link": "https://github.com/shassanahmed93-rgb/grc-cloud-assurance-project",
      "tags": [
        "Risk Assessment",
        "Control Testing",
        "Evidence Traceability",
        "JavaScript",
        "CSV"
      ],
      "points": [
        "Connected eight risks to eight controls and test results, with five remediation findings assigned to owners and deadlines.",
        "Distinguished inherent, current residual and target exposure, retaining above-appetite risk until remediation is demonstrated.",
        "Built a filterable risk heat map, searchable register, CSV export and printable executive briefing; documented synthetic evidence and assessment limitations."
      ],
      "presentation": {
        "id": "assurance",
        "kind": "Interactive case study",
        "summary": "Follow eight cloud risks from control testing to executive decisions and remediation.",
        "metric": "8 risks → 5 findings",
        "route": "Risk → Control → Test → Decision",
        "demo": "projects/cloud-assurance/",
        "study": "https://github.com/shassanahmed93-rgb/grc-cloud-assurance-project/blob/main/docs/case-study.md"
      },
      "category": "governance"
    },
    {
      "name": "Cloud GRC OSCAL Platform",
      "subtitle": "Python and Flask dashboard for synthetic cloud findings and structured security documentation",
      "link": "https://github.com/shassanahmed93-rgb/cloud-grc-oscal-platform",
      "tags": [
        "Python",
        "Flask",
        "OSCAL",
        "NIST SP 800-53",
        "Pytest"
      ],
      "points": [
        "Built a searchable findings dashboard with illustrative likelihood × impact scoring, risk bands and control references.",
        "Added CSV export of visible findings and a downloadable example OSCAL System Security Plan in JSON.",
        "Included automated tests for the risk engine, dashboard and SSP export; uses synthetic findings, with no live AWS collection or compliance certification claim."
      ],
      "presentation": {
        "id": "oscal",
        "kind": "Python application · Synthetic findings",
        "summary": "Explore cloud finding prioritization, control references and an example OSCAL security plan.",
        "image": "https://raw.githubusercontent.com/shassanahmed93-rgb/cloud-grc-oscal-platform/main/screenshots/dashboard.png",
        "study": "https://github.com/shassanahmed93-rgb/cloud-grc-oscal-platform#readme"
      },
      "category": "cloud"
    },
    {
      "name": "Enterprise Risk Register and ISO 27001 ISMS Documentation Set",
      "subtitle": "Fictional global food manufacturer (6,200 employees, 14 plants, 9 countries)",
      "link": "https://github.com/shassanahmed93-rgb/grc-portfolio-to-show",
      "tags": [
        "ISO 31000",
        "ISO/IEC 27001:2022",
        "Annex A",
        "SoA",
        "GDPR",
        "KRIs"
      ],
      "points": [
        "Built an ISO 31000-aligned enterprise risk register of 75 risks across 13 categories (56 cyber), with 5x5 inherent and residual scoring, risk appetite checks, treatment plans, owners, and key risk indicators (KRIs).",
        "Wrote a risk assessment summary for leadership: 12 risks outside appetite, ransomware as the top residual risk, 22 risks relying on weak controls, and 4 overdue treatment actions.",
        "Mapped register risks to all 93 ISO/IEC 27001:2022 Annex A controls in a formula-driven workbook (draft Statement of Applicability) and defined the ISMS scope under clauses 4.1 to 4.3.",
        "Drafted Access Control and Incident Response policies tied to Annex A controls and register KRIs, including joiner/mover/leaver rules, privileged access, severity levels, and the 72-hour GDPR notification clock.",
        "Performed a GDPR-based privacy gap assessment across 18 requirements, with a prioritised remediation roadmap."
      ],
      "presentation": {
        "id": "isms",
        "kind": "Documentation case study",
        "summary": "An enterprise risk register and connected ISMS documentation for a fictional manufacturer.",
        "metric": "75 enterprise risks",
        "route": "Scope → Risk register → Controls → Policies",
        "study": "https://github.com/shassanahmed93-rgb/grc-portfolio-to-show/blob/main/risk-assessment-summary.md"
      },
      "category": "governance"
    },
    {
      "name": "Journal API on AWS: Terraform, EKS, CI/CD, OpenTelemetry",
      "subtitle": "FastAPI and PostgreSQL journaling API with AI-powered entry analysis, deployed to AWS",
      "link": "https://github.com/shassanahmed93-rgb/journal-starter",
      "tags": [
        "AWS",
        "Terraform",
        "EKS",
        "GitHub Actions",
        "OIDC",
        "OpenTelemetry"
      ],
      "points": [
        "Deployed the API to AWS with Terraform (infrastructure as code) on Amazon EKS behind an Application Load Balancer with an ACM TLS certificate.",
        "Built an automated GitHub Actions pipeline (test, build, deploy) using OIDC federation to ECR and EKS with no long-lived keys; passed on main with a recorded production deployment. Added OpenTelemetry observability (dashboard, X-Ray traces, alarms).",
        "Secured the environment: RDS in private subnets reachable only from the app tier, secrets in AWS Secrets Manager, an admin token on destructive endpoints, and SSO with a restricted EKS API for administrators.",
        "Verified live: an independent Learn to Cloud verifier confirmed the public HTTPS API (create entry, AI analysis, and /version matching the deployed commit). Resources were deleted afterwards to avoid ongoing cost.",
        "Documented a known limitation (shared bearer tokens) and the fix: Cognito/OIDC with per-user data isolation."
      ],
      "presentation": {
        "id": "journal",
        "kind": "AWS deployment · Resources retired",
        "summary": "Infrastructure automation, identity federation and observability for a cloud API.",
        "metric": "Terraform → AWS",
        "route": "GitHub Actions → ECR → EKS → RDS",
        "study": "https://github.com/shassanahmed93-rgb/journal-starter#readme"
      },
      "category": "cloud"
    }
  ],
  "certifications": [
    {
      "name": "AWS Certified Cloud Practitioner (CLF-C02)",
      "issuer": "Amazon Web Services (AWS)",
      "featured": true
    },
    {
      "name": "Empire Certified GRC Analyst (ECGRC)",
      "issuer": "Empire Cybersecurity",
      "id": "EC-3C0FFC29D619",
      "featured": true
    },
    {
      "name": "Certified GRC Practitioner – GRC Fundamentals",
      "issuer": "CyberExam",
      "id": "CERT-2026-29111",
      "featured": true
    },
    {
      "name": "ISO/IEC 27001:2022 Implementation",
      "issuer": "Empire Cybersecurity",
      "id": "Z9UO-DC50-X2E7-X95Q"
    },
    {
      "name": "ISO/IEC 27701 Lead Auditor (Training Course)",
      "issuer": "Mastermind"
    },
    {
      "name": "SOC 2 Compliance and Readiness",
      "issuer": "Empire Cybersecurity"
    },
    {
      "name": "NIST Cybersecurity Framework (CSF) 2.0",
      "issuer": "Empire Cybersecurity"
    },
    {
      "name": "PCI DSS 4.0.1 Implementation and Validation",
      "issuer": "Empire Cybersecurity"
    },
    {
      "name": "GRC Foundations",
      "issuer": "ISC2"
    },
    {
      "name": "Managing Governance, Risk and Compliance (GRC)",
      "issuer": "Kennesaw State University"
    },
    {
      "name": "GRC Fundamentals",
      "issuer": "Packt"
    },
    {
      "name": "AI Security & Governance Certified",
      "issuer": ""
    },
    {
      "name": "Google Cybersecurity Professional Certificate",
      "issuer": "Google / Coursera"
    },
    {
      "name": "Junior Cybersecurity Analyst Career",
      "issuer": "Cisco"
    },
    {
      "name": "Cybersecurity Analyst Program (Red & Blue Team Operations)",
      "issuer": "Udemy"
    }
  ],
  "skills": [
    {
      "group": "Governance & Risk",
      "items": [
        "Governance, Risk & Compliance (GRC)",
        "Enterprise & IT Risk Management",
        "Risk Assessment & Treatment",
        "Risk Registers",
        "Control Assessment",
        "Third-Party / Vendor Risk Management",
        "Key Risk Indicators (KRIs)",
        "Risk Appetite & Scoring",
        "IT Governance",
        "Security Policies & Standards"
      ]
    },
    {
      "group": "Frameworks & Standards",
      "items": [
        "ISO/IEC 27001:2022",
        "ISO/IEC 27701 (PIMS)",
        "NIST CSF 2.0",
        "NIST RMF",
        "SOC 2",
        "PCI DSS 4.0.1",
        "COBIT",
        "ISO 31000",
        "GDPR",
        "HIPAA"
      ]
    },
    {
      "group": "Compliance & Audit",
      "items": [
        "Policy & Procedure Development",
        "Statement of Applicability (SoA)",
        "Annex A Control Mapping",
        "Gap Assessment",
        "Internal Audit Support",
        "Audit Evidence & Documentation",
        "ISMS/PIMS Auditing",
        "SOC 2 Readiness",
        "Compliance Monitoring",
        "Data Privacy & Protection",
        "Regulatory Compliance",
        "Security Awareness Training",
        "AI Governance"
      ]
    },
    {
      "group": "Cloud Security",
      "items": [
        "AWS Cloud Fundamentals",
        "AWS Shared Responsibility Model",
        "Identity & Access Management (IAM)",
        "Cloud Security & Compliance",
        "Cloud Governance",
        "Cloud Cost Management"
      ]
    },
    {
      "group": "Security Operations",
      "items": [
        "SIEM Monitoring",
        "Vulnerability Assessment",
        "Incident Response Coordination",
        "Network Security Analysis",
        "Penetration Testing Fundamentals",
        "Web Application Security (SQL Injection)",
        "Linux"
      ]
    },
    {
      "group": "Professional",
      "items": [
        "Stakeholder Management",
        "Executive & Regulator Communication",
        "Crisis Management",
        "Technical Writing & Documentation",
        "Team Leadership",
        "Project Management"
      ]
    }
  ],
  "education": [
    {
      "degree": "Master of Arts (MA), Mass Communication / Media Studies",
      "school": "University of Karachi",
      "year": "2016"
    },
    {
      "degree": "Bachelor of Arts (BA), Mass Communication / Media Studies",
      "school": "University of Karachi",
      "year": "2015"
    }
  ]
};
