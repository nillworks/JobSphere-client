import authHeader from '../Action/authHeader';

const getAllCompany = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/company`, {
    headers: {
      ...(await authHeader()),
    },
  });
  return res.json();
};

export default getAllCompany;
