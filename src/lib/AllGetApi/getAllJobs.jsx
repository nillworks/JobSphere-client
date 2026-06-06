const getAllJobs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/jobs`);
  return res.json();
};

export default getAllJobs;
