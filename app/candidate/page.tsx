'use client';
import { useEffect, useState } from 'react';

export default function CandidatePage() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('All');
  const [applied, setApplied] = useState([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) setJobs(JSON.parse(storedJobs));
  }, []);

  const filteredJobs = filter === 'All' ? jobs : jobs.filter(job => job.type === filter);

  const handleApply = (job) => {
    setApplied([...applied, job.title]);
    alert('Applied successfully!');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Browse Jobs</h2>

      <select className="mb-4 border p-2" value={filter} onChange={e => setFilter(e.target.value)}>
        <option>All</option>
        <option>Full-Time</option>
        <option>Part-Time</option>
        <option>Internship</option>
      </select>

      <ul className="space-y-4">
        {filteredJobs.map((job, idx) => (
          <li key={idx} className="border p-4 rounded shadow">
            <h4 className="font-bold text-lg">{job.title}</h4>
            <p className="text-sm">{job.type} - {job.location}</p>
            <p className="mt-2 text-gray-600">{job.description}</p>

            <form className="mt-4 space-y-2" onSubmit={e => { e.preventDefault(); handleApply(job); }}>
              <input className="border p-2 w-full" placeholder="Your Name" required />
              <input className="border p-2 w-full" placeholder="Email" type="email" required />
              <input className="border p-2 w-full" type="file" accept="application/pdf" required />
              <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
                {applied.includes(job.title) ? 'Applied' : 'Apply'}
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
