import CompanyList from './CompanyList';
import getAllCompany from '@/lib/AllGetApi/getAllCompany';

const CompanyListPage = async () => {
  const companyAll = await getAllCompany();

  return (
    <section className="w-full px-4 py-8 pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <CompanyList companyAllData={companyAll} />
      </div>
    </section>
  );
};

export default CompanyListPage;
