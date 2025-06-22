'use client';
import { useState, useEffect } from 'react';

export default function RecruiterPage() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({ title: '', type: 'Full-Time', location: '', description: '' });

  useEffect(() => {
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) setJobs(JSON.parse(storedJobs));
  }, []);

  const handlePost = () => {
    const newJobs = [...jobs, form];
    setJobs(newJobs);
    localStorage.setItem('jobs', JSON.stringify(newJobs));
    setForm({ title: '', type: 'Full-Time', location: '', description: '' });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
      <div className="grid gap-4">
        <input className="border p-2" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <select className="border p-2" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Internship</option>
        </select>
        <input className="border p-2" placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
        <textarea className="border p-2" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handlePost}>Post Job</button>
      </div>

      <h3 className="text-xl font-bold mt-10 mb-4">My Job Posts</h3>
      <ul className="space-y-2">
        {jobs.map((job, idx) => (
          <li key={idx} className="border p-4 rounded shadow">
            <h4 className="font-bold">{job.title} ({job.type})</h4>
            <p>{job.location}</p>
            <p className="text-sm text-gray-600">{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
