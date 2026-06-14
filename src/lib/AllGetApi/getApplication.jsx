import authHeader from '../Action/authHeader';

const getApplication = async userId => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/application?applicantId=${userId}`,
    {
      headers: await authHeader(),
      cache: 'no-store',
    },
  );
  if (!res.ok) {
    const text = await res.text();
    console.log(text);
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
};

export default getApplication;
