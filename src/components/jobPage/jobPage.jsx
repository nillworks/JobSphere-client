import getAllJobs from '@/lib/AllGetApi/getAllJobs';
import JobCard from '../Shared/JobCard';

const JobPage = async () => {
  const allJobsData = await getAllJobs();
  console.log(allJobsData);

  return (
    <section className="py-10 container mx-auto px-3">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {allJobsData.map(job => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobPage;
