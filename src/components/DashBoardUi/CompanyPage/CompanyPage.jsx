import React from 'react';
import CompanyCard from './CompanyCard';
import { Plus } from 'lucide-react';

const companies = [
  {
    id: 1,
    name: 'Vercel',
    industry: 'Technology',
    status: 'PENDING',
    description:
      'Vercel is the platform for frontend developers, providing speed and reliability. Experience the best workflow for React, Next.js, and more.',
    location: 'San Francisco',
    employees: '201-500 range',
    website: 'vercel.com',
    logo: 'V',
  },
  {
    id: 2,
    name: 'Figma',
    industry: 'Technology',
    status: 'APPROVED',
    description:
      'Figma is the collaborative interface design tool — design, prototype, and gather feedback all in one place. Empowering teams to build better products.',
    location: 'San Francisco',
    employees: '501-1000 range',
    website: 'figma.com',
    logo: 'F',
  },
  {
    id: 3,
    name: 'Enosis Solutions',
    industry: 'Technology',
    status: 'PENDING',
    description:
      'ENOSIS - Your trusted Software Development Partner. A top tier software development team assisting owners and decision makers to implement.',
    location: 'Dhaka, Bangladesh',
    employees: '51-200 range',
    website: 'enosis.com',
    logo: 'E',
  },
];

const CompanyPage = () => {
  return (
    <section className="w-full px-4 py-3 h-full flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            My Companies
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage your registered companies and their verification states.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm cursor-pointer active:scale-95 flex-shrink-0">
          <Plus className="w-4 h-4" />
          Register a company
        </button>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map(company => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </section>
  );
};

export default CompanyPage;
