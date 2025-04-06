import React from 'react';
import { Briefcase, Users, Building2, Trophy, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: 'Active Jobs', value: '24', icon: Briefcase },
    { label: 'Companies', value: '45', icon: Building2 },
    { label: 'Students Placed', value: '156', icon: Users },
    { label: 'Highest Package', value: '₹42L', icon: Trophy },
    { label: 'Average Package', value: '₹12L', icon: TrendingUp },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Placement Highlights 2024</h2>
          <p className="mt-4 text-lg text-gray-600">Our students are making their mark in top companies</p>
        </div>
        
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <dt>
                <div className="absolute rounded-md p-3 bg-indigo-500 text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">{stat.label}</p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
