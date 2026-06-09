const getSingleJob = async id => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/job-details/${id}`,
  );
  return res.json();
};

export default getSingleJob;
