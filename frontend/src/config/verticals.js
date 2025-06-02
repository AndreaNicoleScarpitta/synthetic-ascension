import {
  BrainCircuit,
  ShieldCheck,
  Banknote,
  GraduationCap,
  FlaskConical,
  Users,
  Microscope,
  Cpu,
} from 'lucide-react';

const verticals = [
  {
    icon: BrainCircuit,
    title: 'Clinical AI',
    desc: 'Train and validate models using diverse, bias-free synthetic EHRs that reflect rare and common conditions alike — without needing PHI.',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Affairs',
    desc: 'Demonstrate reproducibility, explainability, and fairness using fully traceable synthetic datasets during FDA or EMA submissions.',
  },
  {
    icon: Banknote,
    title: 'Payers & Insurers',
    desc: 'Run synthetic simulations of claims, risk scores, and coverage policies — safely testing policies before launch or pricing decisions.',
  },
  {
    icon: FlaskConical,
    title: 'Pharma & Biotech',
    desc: 'Simulate trial designs, synthetic cohorts, and adverse event likelihoods early in R&D to shorten discovery-to-protocol timelines.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Medical Centers',
    desc: 'Equip students and researchers with privacy-safe EHR datasets for training, benchmarking, and hypothesis testing.',
  },
  {
    icon: Users,
    title: 'Cross-Institution Research',
    desc: 'Collaborate on shared synthetic cohorts across hospitals, startups, and regulators without sharing real patient data.',
  },
  {
    icon: Microscope,
    title: 'Rare Disease Innovation',
    desc: 'Generate lifelike but simulated cases of low-incidence diseases to support discovery, equity, and early diagnostics.',
  },
  {
    icon: Cpu,
    title: 'Health IT & Dev Platforms',
    desc: 'Use realistic but synthetic patient data to develop and test healthcare applications, without compliance blockers.',
  },
];

export default verticals;
