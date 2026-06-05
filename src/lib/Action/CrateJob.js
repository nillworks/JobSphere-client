'use server';

const CrateJob = async newJobData => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/jobs`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newJobData),
  });
  const res = await req.json();

  return res;
};

export default CrateJob;
