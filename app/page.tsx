'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Job Board</h1>
      <div className="space-x-4">
        <Link href="/recruiter" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Recruiter</Link>
        <Link href="/candidate" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Candidate</Link>
      </div>
    </main>
  );
}
