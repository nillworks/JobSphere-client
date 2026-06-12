import RequireRole from '@/lib/Action/RequireRole';

const SeekerLayout = async ({ children }) => {
  await RequireRole('seeker');
  return children;
};

export default SeekerLayout;
