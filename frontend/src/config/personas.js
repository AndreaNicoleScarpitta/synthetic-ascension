import {
  FaBrain,
  FaChartBar,
  FaFlask,
  FaMicroscope,
  FaUserShield,
} from 'react-icons/fa';

const personas = {
  builder: {
    label: 'AI Builder',
    headline: 'Build Faster with Fully Synthetic Health Data',
    description:
      'Generate agent-grade synthetic EHR data for fine-tuning, testing, and shipping clinical AI systems — without waiting on access or approvals.',
    features: [
      { icon: FaBrain, title: 'LLM-Ready Records', desc: 'Build and test with high-fidelity patient simulations.' },
      { icon: FaChartBar, title: 'API-Driven Workflows', desc: 'Trigger generation from CI/CD or custom prompts.' },
    ],
  },
  researcher: {
    label: 'Clinical Researcher',
    headline: 'Validate Hypotheses at Speed',
    description:
      'Simulate rare, diverse, or edge-case patient cohorts for precision science — without IRB bottlenecks or privacy concerns.',
    features: [
      { icon: FaMicroscope, title: 'Custom Cohort Builder', desc: 'Define diagnosis, demographics, labs, and more.' },
      { icon: FaFlask, title: 'Ground Truth Comparisons', desc: 'Validate synthetic output against benchmarks.' },
    ],
  },
  enterprise: {
    label: 'Enterprise Health Leader',
    headline: 'Scale Innovation Without Risk',
    description:
      'Enable internal teams, partners, and vendors to develop with clinical-grade data — without exposing real PHI.',
    features: [
      { icon: FaUserShield, title: 'HIPAA-Compliant Core', desc: 'Zero PHI. Audit-safe. IT approved.' },
      { icon: FaChartBar, title: 'Cross-Team Access', desc: 'One simulation platform for R&D, compliance, and ops.' },
    ],
  },
};

export default personas;
