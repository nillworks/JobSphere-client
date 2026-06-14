import { auth } from '../auth';
import { headers } from 'next/headers';

const getUserToken = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.session?.token || null;
};

export default getUserToken;
