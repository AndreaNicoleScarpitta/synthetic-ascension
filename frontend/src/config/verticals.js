import {
  FaNotesMedical,
  FaHospitalUser,
  FaRobot,
  FaLock,
  FaMicroscope,
  FaFlask,
} from 'react-icons/fa';

const verticals = [
  {
    icon: FaNotesMedical,
    title: 'Pharma & Life Sciences',
    desc: 'Simulate trial arms, enrich control cohorts, and test inclusion/exclusion criteria.',
  },
  {
    icon: FaHospitalUser,
    title: 'Payers & Health Systems',
    desc: 'Model utilization, test risk algorithms, and explore SDOH at scale.',
  },
  {
    icon: FaRobot,
    title: 'AI Startups & Infra',
    desc: 'Fuel training pipelines with agent-grade structured clinical data.',
  },
  {
    icon: FaLock,
    title: 'Regulators & Quality Teams',
    desc: 'Pre-test AI systems, simulate rare edge cases, and strengthen regulatory submissions.',
  },
  {
    icon: FaFlask,
    title: 'Medical Affairs & Market Access',
    desc: 'Model product effectiveness in synthetic populations to support payer negotiation.',
  },
  {
    icon: FaMicroscope,
    title: 'Bioinformatics & RWE Teams',
    desc: 'Integrate synthetic clinical-genomic data for rare disease modeling and discovery.',
  },
];

export default verticals;
