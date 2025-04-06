import React from 'react';

interface Opportunity {
  role: string;
  company: string;
  type: 'Job' | 'Internship';
  skills: string[];
}

export default function Opportunities() {
  const opportunities: Opportunity[] = [
    {
      role: 'Software Engineer',
      company: 'Google',
      type: 'Job',
      skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
    },
    {
      role: 'Data Science Intern',
      company: 'Microsoft',
      type: 'Internship',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
    },
    {
      role: 'Frontend Developer',
      company: 'Amazon',
      type: 'Job',
      skills: ['React', 'JavaScript', 'Redux', 'HTML', 'CSS', 'Tailwind CSS'],
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Latest Opportunities</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the latest job and internship openings
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900">{opportunity.role}</h3>
              <p className="text-gray-500">{opportunity.company} ({opportunity.type})</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700">Skills Required:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {opportunity.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
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
