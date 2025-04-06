import React from 'react';
import { GraduationCap, ArrowRight, Building2, ShieldCheck, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-indigo-700">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Students in campus"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <GraduationCap className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Training & Placement Cell
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
            Connecting JUET's Talent with Global Opportunities
          </p>
          
          {/* Primary Buttons */}
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/student-registration')}
                className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-700 transition-colors"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Student Registration
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/recruiter-registration')}
                className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-700 transition-colors"
              >
                <Building2 className="w-5 h-5 mr-2" />
                Recruiter Registration
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            
            {/* Secondary Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/coordinator-login')}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-base font-medium rounded-md text-white hover:bg-indigo-700 transition-colors"
              >
                <ShieldCheck className="w-5 h-5 mr-2" />
                Coordinator Login
              </button>
              <button
                onClick={() => navigate('/verifier-login')}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-base font-medium rounded-md text-white hover:bg-indigo-700 transition-colors"
              >
                <UserCheck className="w-5 h-5 mr-2" />
                Verifier Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
