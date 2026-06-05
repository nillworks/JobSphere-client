const CrateCompany = async newCompany => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/company`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newCompany),
  });

  const res = await req.json();

  return res;
};

export default CrateCompany;
