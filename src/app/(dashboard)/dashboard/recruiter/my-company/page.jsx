import CompanyPage from '@/components/DashBoardUi/CompanyPage/CompanyPage';
import getUserSession from '@/lib/Action/getUserSession';
import getRecruiterCompany from '@/lib/AllGetApi/getRecruiterCompany';

const page = async () => {
  const user = await getUserSession();

  const data = await getRecruiterCompany(user?.id);
  const recruiterMyCompanyData = data?.data;

  return (
    <>
      <CompanyPage myCompany={recruiterMyCompanyData} />
    </>
  );
};

export default page;
