import getUserList from '@/lib/AllGetApi/getUserList';
import UserTable from '@/components/DashBoardUi/AdminUi/UserTable';

const page = async () => {
  const data = await getUserList();
  const users = data?.users || [];

  return (
    <div className="container mx-auto pt-20 px-2">
      <UserTable users={users} />
    </div>
  );
};

export default page;
