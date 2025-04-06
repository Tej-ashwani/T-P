import React from 'react';
import { GraduationCap, Lightbulb, Award, Users, Building2, Briefcase } from 'lucide-react';

export default function WhyRecruit() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Recruit from JUET?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the benefits of hiring our talented students
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Academically Excellent</h3>
            </div>
            <p className="text-gray-700">
              Our students consistently demonstrate strong academic performance and a commitment to excellence in their fields.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Innovative Thinkers</h3>
            </div>
            <p className="text-gray-700">
              We foster a culture of innovation and critical thinking, empowering students to develop creative solutions to complex problems.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Industry-Ready Skills</h3>
            </div>
            <p className="text-gray-700">
              Our curriculum is designed in collaboration with industry experts, ensuring that students graduate with the skills and knowledge needed to succeed in today's competitive job market.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Diverse Talent Pool</h3>
            </div>
            <p className="text-gray-700">
              We attract a diverse student body from across the country, bringing a wide range of perspectives and experiences to your organization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Building2 className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Strong Alumni Network</h3>
            </div>
            <p className="text-gray-700">
              Our graduates have gone on to successful careers at leading companies around the world, forming a valuable network that can benefit your organization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Briefcase className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Dedicated Placement Support</h3>
            </div>
            <p className="text-gray-700">
              Our Training and Placement Cell provides comprehensive support to both students and recruiters, ensuring a smooth and successful hiring process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
