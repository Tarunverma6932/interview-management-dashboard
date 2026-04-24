export const users = [
  { id: 'u1', name: 'Rebecca Hart', email: 'rebecca@hirepro.com', role: 'HR', password: 'Welcome123' },
  { id: 'u2', name: 'Adrian Cox', email: 'adrian@hirepro.com', role: 'Team', password: 'TeamLead1' },
  { id: 'u3', name: 'Sofia Gray', email: 'sofia@hirepro.com', role: 'CEO', password: 'Vision2026' }
];

export const candidates = [
  {
    id: 'c1',
    name: 'Nina Patel',
    email: 'nina.patel@example.com',
    phone: '+1 415 123 8901',
    appliedRole: 'Frontend Developer',
    resume: 'https://example.com/resume/nina-patel.pdf',
    portfolio: 'https://ninafolio.dev',
    github: 'https://github.com/ninapatel',
    linkedin: 'https://linkedin.com/in/ninapatel',
    currentRound: 'Round 2',
    status: 'in progress',
    notes: 'Strong React experience and polished UI sense.',
    expectedJoining: '2026-06-10',
    nextInterview: '2026-05-02'
  },
  {
    id: 'c2',
    name: 'Miles Connor',
    email: 'miles.connor@example.com',
    phone: '+1 212 555 0137',
    appliedRole: 'Backend Developer',
    resume: 'https://example.com/resume/miles-connor.pdf',
    portfolio: 'https://milesdev.app',
    github: 'https://github.com/milesconnor',
    linkedin: 'https://linkedin.com/in/milesconnor',
    currentRound: 'Round 1',
    status: 'shortlisted',
    notes: 'API design and Node.js expertise.',
    expectedJoining: '2026-06-15',
    nextInterview: '2026-05-04'
  },
  {
    id: 'c3',
    name: 'Olivia Chen',
    email: 'olivia.chen@example.com',
    phone: '+1 415 889 2071',
    appliedRole: 'Full Stack Developer',
    resume: 'https://example.com/resume/olivia-chen.pdf',
    portfolio: 'https://devolivia.io',
    github: 'https://github.com/oliviachen',
    linkedin: 'https://linkedin.com/in/oliviachen',
    currentRound: 'Round 3',
    status: 'cleared',
    notes: 'Excellent full-stack ownership and communication.',
    expectedJoining: '2026-05-27',
    nextInterview: ''
  }
];

export const interviews = [
  {
    id: 'i1',
    candidateId: 'c1',
    round: 'Technical Interview',
    date: '2026-05-02',
    interviewer: 'Adrian Cox',
    feedback: 'Very strong component architecture and debugging skills.',
    score: 9,
    decision: 'next round scheduled'
  },
  {
    id: 'i2',
    candidateId: 'c2',
    round: 'API Review',
    date: '2026-05-04',
    interviewer: 'Rebecca Hart',
    feedback: 'Clean backend approach with solid tests.',
    score: 8,
    decision: 'shortlisted'
  },
  {
    id: 'i3',
    candidateId: 'c3',
    round: 'Final Review',
    date: '2026-04-28',
    interviewer: 'Sofia Gray',
    feedback: 'CEO approval granted, ready for offer.',
    score: 10,
    decision: 'cleared'
  }
];

export const statuses = ['shortlisted', 'in progress', 'cleared', 'rejected', 'hold', 'next round scheduled'];
