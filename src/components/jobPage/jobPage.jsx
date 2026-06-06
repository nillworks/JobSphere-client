import getAllJobs from '@/lib/AllGetApi/getAllJobs';
import JobClientWrapper from './JobClientWrapper';

const JobPage = async () => {
  const allJobsData = await getAllJobs();

  return (
    <section className="py-10 container mx-auto px-3">
      <JobClientWrapper jobs={allJobsData} />
    </section>
  );
};

export default JobPage;
