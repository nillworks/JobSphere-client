import RequireRole from '@/lib/Action/RequireRole';

const AdminLayout = async ({ children }) => {
  await RequireRole('admin');

  return children;
};

export default AdminLayout;
