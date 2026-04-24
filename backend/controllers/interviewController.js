import Interview from '../models/Interview.js';
import Candidate from '../models/Candidate.js';

export async function getInterviews(req, res) {
  const interviews = await Interview.find().populate('candidate', 'name appliedRole');
  res.json(interviews);
}

export async function getInterviewById(req, res) {
  const interview = await Interview.findById(req.params.id).populate('candidate', 'name appliedRole');
  if (!interview) {
    return res.status(404).json({ message: 'Interview not found.' });
  }
  res.json(interview);
}

export async function getInterviewsByCandidate(req, res) {
  const interviews = await Interview.find({ candidate: req.params.candidateId }).sort({ date: -1 });
  res.json(interviews);
}

export async function createInterview(req, res) {
  const candidate = await Candidate.findById(req.body.candidate);
  if (!candidate) {
    return res.status(404).json({ message: 'Candidate not found.' });
  }
  const interview = await Interview.create(req.body);
  res.status(201).json(interview);
}

export async function updateInterview(req, res) {
  const interview = await Interview.findById(req.params.id);
  if (!interview) {
    return res.status(404).json({ message: 'Interview not found.' });
  }
  Object.assign(interview, req.body);
  const updated = await interview.save();
  res.json(updated);
}
