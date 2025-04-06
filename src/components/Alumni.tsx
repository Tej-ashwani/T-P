import React from 'react';

interface AlumniMember {
  name: string;
  email: string;
  designation: string;
}

export default function Alumni() {
  const alumniMembers: AlumniMember[] = [
    { name: 'Alice Johnson', email: 'alice.j@example.com', designation: 'Software Engineer at Google' },
    { name: 'Bob Williams', email: 'bob.w@example.com', designation: 'Product Manager at Microsoft' },
    { name: 'Charlie Brown', email: 'charlie.b@example.com', designation: 'Data Scientist at Amazon' },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Successful Alumni</h2>
          <p className="mt-4 text-lg text-gray-600">Connect with our alumni for referrals and guidance</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {alumniMembers.map((alumnus, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">{alumnus.name}</h3>
              <p className="text-gray-500">{alumnus.designation}</p>
              <a href={`mailto:${alumnus.email}`} className="mt-2 block text-indigo-600 hover:text-indigo-500">
                {alumnus.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
