import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    appliedRole: {
      type: String,
      required: true,
      enum: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer']
    },
    resume: { type: String, trim: true },
    portfolio: { type: String, trim: true },
    github: { type: String, trim: true },
    linkedin: { type: String, trim: true },
    currentRound: { type: String, default: 'Round 1' },
    status: {
      type: String,
      enum: ['shortlisted', 'in progress', 'cleared', 'rejected', 'hold', 'next round scheduled'],
      default: 'shortlisted'
    },
    notes: { type: String, trim: true },
    expectedJoining: { type: Date },
    nextInterview: { type: Date }
  },
  { timestamps: true }
);

const Candidate = mongoose.model('Candidate', candidateSchema);
export default Candidate;
