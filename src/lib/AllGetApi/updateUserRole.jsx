'use server';

import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import { auth } from '../auth';

const updateUserRole = async (userId, role) => {
  const data = await auth.api.setRole({
    body: {
      userId,
      role,
    },
    headers: await headers(),
  });

  // Revalidate the admin users page so the Server Component refetches
  // fresh data and the table reflects the new role immediately.
  revalidatePath('/dashboard/admin/users');

  return data;
};

export default updateUserRole;
