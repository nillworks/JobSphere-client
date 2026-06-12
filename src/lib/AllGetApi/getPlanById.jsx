const getPlanById = async planId => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/plans?plan_id=${planId}`,
  );

  return res.json();
};

export default getPlanById;
