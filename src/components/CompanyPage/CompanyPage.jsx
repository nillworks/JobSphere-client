import getAllCompany from '@/lib/AllGetApi/getAllCompany';
import CompanyClientWrapper from './CompanyClientWrapper';

const CompanyPage = async () => {
  const allDataCompany = await getAllCompany();

  return (
    <div className="w-full">
      <CompanyClientWrapper companies={allDataCompany} />
    </div>
  );
};

export default CompanyPage;
