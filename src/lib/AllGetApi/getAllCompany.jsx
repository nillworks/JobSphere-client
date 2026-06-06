const getAllCompany = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/company`);
  return res.json();
};

export default getAllCompany;
