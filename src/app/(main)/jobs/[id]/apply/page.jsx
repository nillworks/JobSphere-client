import JobsApplyFrom from '@/components/jobsDetailsPage/JobsApplyFrom';
import getUserSession from '@/lib/Action/getUserSession';
import getSingleJob from '@/lib/AllGetApi/getSingleJob';
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

  return (
    <section className="pt-18">
      <JobsApplyFrom singleJobsData={singleJobsData} user={user} />
    </section>
  );
};

export default ApplyPage;
