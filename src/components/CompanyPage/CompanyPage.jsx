import getAllCompany from '@/lib/AllGetApi/getAllCompany';
import CompanyCard from '../DashBoardUi/CompanyPage/CompanyCard';

const CompanyPage = async () => {
  const allDataCompany = await getAllCompany();
  console.log(allDataCompany);

  return (
    <section className="container mx-auto py-10">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {allDataCompany.map(company => (
          <CompanyCard key={company._id} company={company} />
        ))}
      </div>
    </section>
  );
};

export default CompanyPage;
