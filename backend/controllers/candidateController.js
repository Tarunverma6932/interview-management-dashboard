import Candidate from '../models/Candidate.js';

export async function getCandidates(req, res) {
  const candidates = await Candidate.find().sort({ createdAt: -1 });
  res.json(candidates);
}

export async function getCandidateById(req, res) {
  const candidate = await Candidate.findById(req.params.id);
  if (!candidate) {
    return res.status(404).json({ message: 'Candidate not found.' });
  }
  res.json(candidate);
}

export async function createCandidate(req, res) {
  const candidate = await Candidate.create(req.body);
  res.status(201).json(candidate);
}

export async function updateCandidate(req, res) {
  const candidate = await Candidate.findById(req.params.id);
  if (!candidate) {
    return res.status(404).json({ message: 'Candidate not found.' });
  }
  Object.assign(candidate, req.body);
  const updated = await candidate.save();
  res.json(updated);
}

export async function deleteCandidate(req, res) {
  const candidate = await Candidate.findById(req.params.id);
  if (!candidate) {
    return res.status(404).json({ message: 'Candidate not found.' });
  }
  await candidate.remove();
  res.json({ message: 'Candidate removed' });
}
