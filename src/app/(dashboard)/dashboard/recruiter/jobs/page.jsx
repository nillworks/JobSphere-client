import RecruiterAllJobPost from '@/components/DashBoardUi/jobPostUi/RecruiterAllJobPost';
import getUserSession from '@/lib/Action/getUserSession';
import getRecruiterJobs from '@/lib/AllGetApi/getRecruiterJobs';
import getRecruiterCompany from './../../../../../lib/AllGetApi/getRecruiterCompany';

const page = async () => {
  const user = await getUserSession();

  const data = await getRecruiterJobs(user?.id);
  const recruiterJobData = data.data;

  const company = await getRecruiterCompany(user?.id);

  return (
    <>
      <RecruiterAllJobPost
        recruiterJobData={recruiterJobData}
        company={company?.data}
      />
    </>
  );
};

export default page;
