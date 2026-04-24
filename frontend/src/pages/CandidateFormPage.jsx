import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CandidateForm from '../components/CandidateForm';
import { createCandidate, getCandidate, updateCandidate } from '../services/candidateService';

function CandidateFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      getCandidate(id).then((item) => item && setCandidate(item));
    }
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCandidate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      if (id) {
        await updateCandidate(id, candidate);
      } else {
        await createCandidate(candidate);
      }
      navigate('/candidates');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">{id ? 'Edit candidate' : 'Add candidate'}</h2>
        <p className="mt-2 text-sm text-slate-500">Maintain full candidate profile details and interview readiness.</p>
      </div>
      {error && <div className="rounded-3xl bg-red-50 p-4 text-sm text-red-700">{error}</div>}
      <CandidateForm candidate={candidate} onChange={handleChange} onSubmit={handleSubmit} submitLabel={id ? 'Save updates' : 'Create candidate'} />
    </div>
  );
}

export default CandidateFormPage;
