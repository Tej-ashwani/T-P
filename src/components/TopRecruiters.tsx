import React from 'react';

export default function TopRecruiters() {
  const companies = [
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Top Recruiters</h2>
          <p className="mt-4 text-lg text-gray-600">
            Leading companies that trust JUET talent
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex justify-center items-center py-8 px-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  className="max-h-12"
                  src={company.logo}
                  alt={`${company.name} logo`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
