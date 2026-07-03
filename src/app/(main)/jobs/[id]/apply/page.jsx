import JobsApplyFrom from '@/components/jobsDetailsPage/JobsApplyFrom';
import getUserSession from '@/lib/Action/getUserSession';
import getApplication from '@/lib/AllGetApi/getApplication';
import getPlanById from '@/lib/AllGetApi/getPlanById';
import getSingleJob from '@/lib/AllGetApi/getSingleJob';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();
  console.log(user);
  const singleJobsData = await getSingleJob(id);
  console.log(singleJobsData);

  if (!user) {
    redirect(`/signin?redirect=/jobs/${id}/apply`);
  }

  if (user?.role !== 'seeker') {
    return (
      <section className="pt-24 pb-12 container mx-auto px-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="p-8 bg-red-50 border border-red-200 rounded-xl text-center max-w-md shadow-sm">
            <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
            <p className="text-gray-600 mt-3 text-lg">
              This application is available only for job seekers.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const application = await getApplication(user?.id);
  console.log(application);

  console.log(user);

  console.log(user?.role)

  const plan = await getPlanById(user?.plan);
  console.log('plan', plan);

  return (
    <section className="pt-24 pb-4 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-2 flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl border border-[#ff9a86]/30 bg-[#fff5f3] px-6 py-4 shadow-sm transition-all hover:shadow-md dark:border-[#ff9a86]/20 dark:bg-[#ff9a86]/5 sm:flex-row">
          <div>
            <h2 className="text-base font-medium text-slate-800 dark:text-slate-200">
              You have applied so far:{' '}
              <span className="text-lg font-bold text-[#ff9a86]">{application.length}</span>{' '}
              <span className="mx-1 text-slate-500">out of</span>{' '}
              <span className="text-lg font-bold text-emerald-500 dark:text-emerald-400">{plan.maxApplicationPerMonth}</span>
            </h2>
            <p className="mt-0.5 text-sm text-slate-500 dark:text-[#546881]">
              Purchase a plan to apply for more positions.
            </p>
          </div>
          <Link
            href="/plans"
            className="whitespace-nowrap rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-[#ff9a86] shadow-sm transition-all hover:scale-105 hover:bg-slate-50 hover:shadow dark:bg-[#1a2028] dark:hover:bg-[#232b36]"
          >
            View Plans
          </Link>
        </div>
      </div>
      {application.length < plan.maxApplicationPerMonth && (
        <JobsApplyFrom singleJobsData={singleJobsData} user={user} />
      )}
    </section>
  );
};

export default ApplyPage;
