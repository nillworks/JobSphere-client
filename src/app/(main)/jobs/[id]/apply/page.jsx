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
  const singleJobsData = await getSingleJob(id);

  if (!user) {
    redirect(`/signin?redirect=/jobs/${id}/apply`);
  }

  if (user?.role !== 'seeker') {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-center">
          <h2 className="text-lg font-semibold text-red-600">Access Denied</h2>
          <p className="text-gray-600 mt-2">
            This application is available only for job seekers.
          </p>
        </div>
      </div>
    );
  }

  const application = await getApplication(user?.id);

  const plan = await getPlanById(user?.plan);

  return (
    <section className="pt-18 py-4 container mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          You have applied so far:{' '}
          <span className="text-blue-600">{application.length}</span> out of{' '}
          <span className="text-green-600">{plan.maxApplicationPerMonth}</span>
        </h2>

        <p className="mt-3 text-sm text-gray-600">
          Purchase a plan to apply for more positions.
          <Link
            href="/"
            className="ml-1 text-blue-600 font-medium hover:underline"
          >
            View Plans
          </Link>
        </p>
      </div>
      {application.length < plan.maxApplicationPerMonth && (
        <JobsApplyFrom singleJobsData={singleJobsData} user={user} />
      )}
    </section>
  );
};

export default ApplyPage;
