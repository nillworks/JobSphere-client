import RequireRole from '@/lib/Action/RequireRole';

const RecruiterLayout = async ({ children }) => {
  await RequireRole('recruiter');

  return children;
};

export default RecruiterLayout;
