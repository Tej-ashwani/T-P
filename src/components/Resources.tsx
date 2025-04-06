import React from 'react';
import { FileText, BookOpen, GraduationCap, Building2, Users, Download, ExternalLink } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  link: string;
  type: 'download' | 'external';
}

export default function Resources() {
  const categories = [
    {
      title: 'Resume & Cover Letter',
      icon: FileText,
      resources: [
        {
          title: 'Professional Resume Template',
          description: 'Clean and modern resume template in Word format',
          link: '/templates/professional-resume.docx',
          type: 'download'
        },
        {
          title: 'Resume Writing Guide',
          description: 'Comprehensive guide on crafting an effective resume',
          link: '/guides/resume-writing.pdf',
          type: 'download'
        },
        {
          title: 'Cover Letter Template',
          description: 'Professional cover letter template with examples',
          link: '/templates/cover-letter.docx',
          type: 'download'
        }
      ]
    },
    {
      title: 'Interview Preparation',
      icon: BookOpen,
      resources: [
        {
          title: 'Technical Interview Guide',
          description: 'Common technical questions and best practices',
          link: '/guides/technical-interview.pdf',
          type: 'download'
        },
        {
          title: 'HR Interview Questions',
          description: 'Frequently asked HR questions with sample answers',
          link: '/guides/hr-interview.pdf',
          type: 'download'
        },
        {
          title: 'Mock Interview Platform',
          description: 'Practice interviews with AI-powered feedback',
          link: 'https://mock-interview.example.com',
          type: 'external'
        }
      ]
    },
    {
      title: 'Placement Process',
      icon: GraduationCap,
      resources: [
        {
          title: 'T&P Policy Document',
          description: 'Official placement policies and guidelines',
          link: '/docs/placement-policy.pdf',
          type: 'download'
        },
        {
          title: 'Placement Calendar',
          description: 'Important dates and deadlines',
          link: '/calendar',
          type: 'external'
        }
      ]
    },
    {
      title: 'Career Guidance',
      icon: Building2,
      resources: [
        {
          title: 'Industry Reports',
          description: 'Latest trends and insights across industries',
          link: '/reports/industry-insights.pdf',
          type: 'download'
        },
        {
          title: 'Higher Education Guide',
          description: 'Guide to pursuing further studies',
          link: '/guides/higher-education.pdf',
          type: 'download'
        }
      ]
    },
    {
      title: 'Alumni Network',
      icon: Users,
      resources: [
        {
          title: 'Alumni Directory',
          description: 'Connect with JUET alumni',
          link: '/alumni',
          type: 'external'
        },
        {
          title: 'Success Stories',
          description: 'Inspiring stories from our alumni',
          link: '/stories/alumni-success.pdf',
          type: 'download'
        }
      ]
    }
  ];

  const ResourceCard = ({ resource }: { resource: Resource }) => (
    <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {resource.type === 'download' ? (
        <Download className="w-5 h-5 text-indigo-600 mt-1" />
      ) : (
        <ExternalLink className="w-5 h-5 text-indigo-600 mt-1" />
      )}
      <div className="ml-4">
        <h4 className="text-lg font-medium text-gray-900">{resource.title}</h4>
        <p className="mt-1 text-sm text-gray-500">{resource.description}</p>
        <a
          href={resource.link}
          className="mt-2 inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500"
        >
          {resource.type === 'download' ? 'Download' : 'Visit'} →
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Resources</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to prepare for your career journey
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {categories.map((category) => (
              <div key={category.title} className="space-y-4">
                <div className="flex items-center">
                  <category.icon className="w-6 h-6 text-indigo-600" />
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.resources.map((resource) => (
                    <ResourceCard key={resource.title} resource={resource} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
