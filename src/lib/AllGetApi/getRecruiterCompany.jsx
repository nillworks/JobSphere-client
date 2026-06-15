import authHeader from '../Action/authHeader';

const getRecruiterCompany = async recruiterId => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/recruiter/company/${recruiterId}`,
    { headers: await authHeader() },
  );
  return res.json();
};

export default getRecruiterCompany;
