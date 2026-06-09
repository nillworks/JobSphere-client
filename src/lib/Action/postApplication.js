const postApplication = async newApplication => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/application`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newApplication),
  });

  const res = await req.json();

  return res;
};

export default postApplication;
