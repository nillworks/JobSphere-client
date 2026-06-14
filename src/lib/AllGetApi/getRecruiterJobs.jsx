const getRecruiterJobs = async recruiterId => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/recruiter/job/${recruiterId}`,
  );
  return res.json();
};

export default getRecruiterJobs;
