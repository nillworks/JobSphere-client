const updateCompany = async (id, companyData) => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/company/${id}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(companyData),
  });

  const res = await req.json();

  return res;
};

export default updateCompany;
