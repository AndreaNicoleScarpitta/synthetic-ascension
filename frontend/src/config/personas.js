import {
  BrainCircuit,
  Microscope,
  Banknote,
  GraduationCap,
  ShieldCheck,
  FlaskConical,
  Users,
  Cpu,
} from 'lucide-react';

const personas = {
  builder: {
    label: 'AI Builder',
    headline: 'Build clinical AI with confidence.',
    description:
      'Fast-track development with bias-free, privacy-safe synthetic EHRs designed for training, testing, and validation.',
    features: [
      {
        icon: BrainCircuit,
        title: 'Bias-Free Training Sets',
        desc: 'Train your models with diverse, equitable, and high-fidelity synthetic EHRs.',
      },
      {
        icon: Microscope,
        title: 'Rare Condition Simulation',
        desc: 'Model edge cases and rare diseases without waiting for real-world occurrences.',
      },
      {
        icon: ShieldCheck,
        title: 'Traceable QA & Audit Logs',
        desc: 'Every dataset comes with agent-reviewed QA artifacts and full lineage for review.',
      },
    ],
  },

  regulator: {
    label: 'Regulator & QA Reviewer',
    headline: 'Validate and audit with transparency.',
    description:
      'Ensure reproducibility, generalizability, and safety by testing AI on synthetic datasets that reflect real-world complexity without compromising PHI.',
    features: [
      {
        icon: ShieldCheck,
        title: 'Regulatory Simulation',
        desc: 'Run scenario-based audits and fairness testing with known cohort coverage.',
      },
      {
        icon: Microscope,
        title: 'Explainable Edge Case QA',
        desc: 'Audit AI model behavior across low-incidence conditions and ambiguous cases.',
      },
      {
        icon: GraduationCap,
        title: 'Train Reviewers Safely',
        desc: 'Create synthetic datasets for internal QA training without PHI exposure.',
      },
    ],
  },

  payer: {
    label: 'Payer & Insurer',
    headline: 'Model outcomes, detect fraud, simulate policy.',
    description:
      'Use synthetic datasets to run actuarial simulations, detect adverse trends, and validate coverage strategies with full control and zero PHI risk.',
    features: [
      {
        icon: Banknote,
        title: 'Synthetic Utilization Modeling',
        desc: 'Forecast costs and outcomes for hypothetical cohorts and coverage plans.',
      },
      {
        icon: Cpu,
        title: 'Claims Rule Testing',
        desc: 'Run claims adjudication or fraud models against realistic-but-fake input data.',
      },
      {
        icon: ShieldCheck,
        title: 'De-Risked Data Innovation',
        desc: 'Test new algorithms or partnerships without PHI exposure or breach liability.',
      },
    ],
  },

  pharma: {
    label: 'Pharma & Biotech',
    headline: 'Accelerate R&D and unlock preclinical signal.',
    description:
      'Accelerate hypothesis testing, protocol design, and model experimentation — even before patient data is accessible.',
    features: [
      {
        icon: FlaskConical,
        title: 'Synthetic Cohort Design',
        desc: 'Create stratified patient profiles to simulate response to trials or interventions.',
      },
      {
        icon: Microscope,
        title: 'Target Discovery Sandbox',
        desc: 'Explore mechanistic hypotheses using synthetic patient timelines and comorbidities.',
      },
      {
        icon: BrainCircuit,
        title: 'Preclinical Model Validation',
        desc: 'Use synthetic histories to benchmark algorithms before engaging CROs or sites.',
      },
    ],
  },

  academic: {
    label: 'Academic Med Center',
    headline: 'Prototype studies without delays or risk.',
    description:
      'Eliminate IRB slowdowns and unlock early experimentation by building synthetic cohorts for safe and fast iteration.',
    features: [
      {
        icon: GraduationCap,
        title: 'IRB-Free Experimentation',
        desc: 'Design and run simulation studies without access to PHI.',
      },
      {
        icon: Microscope,
        title: 'Curriculum Integration',
        desc: 'Educate and train students using real-feel data, minus the compliance burden.',
      },
      {
        icon: BrainCircuit,
        title: 'Clinical AI Benchmarking',
        desc: 'Host community benchmarks for reproducible model comparisons and open research.',
      },
    ],
  },

  consortium: {
    label: 'Collaborative Consortia',
    headline: 'Coordinate safely across institutions.',
    description:
      'Enable multi-site data sharing, benchmarking, and federated AI development without ever exchanging PHI.',
    features: [
      {
        icon: Users,
        title: 'Safe Cross-Site Studies',
        desc: 'Coordinate synthetic cohort generation across partners without regulatory burden.',
      },
      {
        icon: ShieldCheck,
        title: 'Audit-Ready Reporting',
        desc: 'Produce reproducible audit logs across decentralized simulation environments.',
      },
      {
        icon: Cpu,
        title: 'Synthetic Data Standardization',
        desc: 'Use shared formats and lineage-preserving QA to unify efforts.',
      },
    ],
  },
};

export default personas;
