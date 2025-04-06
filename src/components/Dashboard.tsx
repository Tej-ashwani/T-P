import React from 'react';
import { Briefcase, Users, Building2, Trophy } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Active Jobs', value: '24', icon: Briefcase },
    { label: 'Companies', value: '45', icon: Building2 },
    { label: 'Students Placed', value: '156', icon: Users },
    { label: 'Highest Package', value: '₹42L', icon: Trophy },
  ];

  const recentJobs = [
    {
      company: 'Microsoft',
      role: 'Software Engineer',
      package: '₹44L',
      deadline: '2024-03-25',
    },
    {
      company: 'Google',
      role: 'Product Manager',
      package: '₹35L',
      deadline: '2024-03-28',
    },
    {
      company: 'Amazon',
      role: 'SDE-1',
      package: '₹32L',
      deadline: '2024-03-30',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <div className="text-sm text-gray-500">{stat.label}</div>
                <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Job Postings</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentJobs.map((job) => (
            <div key={job.company} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{job.role}</h3>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">{job.package}</p>
                  <p className="text-sm text-gray-500">
                    Deadline: {new Date(job.deadline).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
