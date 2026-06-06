const getLimitJobs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/jobs/limit`);
  return res.json();
};

export default getLimitJobs;
