import JobsDetailsPage from '@/components/jobsDetailsPage/JobsDetailsPage';
import getSingleJob from '@/lib/AllGetApi/getSingleJob';

const jobsDetails = async ({ params }) => {
  const { id } = await params;
  const singleJob = await getSingleJob(id);
  console.log(singleJob);

  return <div>
    <JobsDetailsPage singleJob={singleJob } />
  </div>;
};

export default jobsDetails;
