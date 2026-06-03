import LeftNavigationMenu from '@/components/DashBoardUi/LeftNavigationMenu';

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-[#090b0e]">
      <LeftNavigationMenu />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default DashBoardLayout;
