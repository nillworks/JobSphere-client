import authHeader from '../Action/authHeader';

const getSingleJob = async id => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/job-details/${id}`,
    {
      headers: await authHeader(),
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch job');
  }

  return await res.json();
};

export default getSingleJob;
