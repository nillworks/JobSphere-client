import RecruiterAllJobPost from '@/components/DashBoardUi/jobPostUi/RecruiterAllJobPost';
import getUserSession from '@/lib/Action/getUserSession';
import getRecruiterJobs from '@/lib/AllGetApi/getRecruiterJobs';

const page = async () => {
  const user = await getUserSession();

  const data = await getRecruiterJobs(user?.id);
  const recruiterJobData = data.data;

  return (
    <>
      <RecruiterAllJobPost recruiterJobData={recruiterJobData} />
    </>
  );
};

export default page;
