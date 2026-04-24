import mongoose from 'mongoose';

const interviewSchema = new mongoose.Schema(
  {
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
    round: { type: String, required: true },
    date: { type: Date, required: true },
    interviewer: { type: String, required: true, trim: true },
    feedback: { type: String, trim: true },
    score: { type: Number, min: 0, max: 10, default: 0 },
    decision: {
      type: String,
      enum: ['shortlisted', 'in progress', 'cleared', 'rejected', 'hold', 'next round scheduled'],
      default: 'shortlisted'
    }
  },
  { timestamps: true }
);

const Interview = mongoose.model('Interview', interviewSchema);
export default Interview;
