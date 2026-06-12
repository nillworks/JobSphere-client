const getApplication = async userId => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/application?applicantId=${userId}`,
  );
  return res.json();
};

export default getApplication;
