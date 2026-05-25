const StatCard = ({ icon: Icon, value, label, delayClass = "" }) => {
  return (
    <div
      className={`group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff9a86]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:border-[#1d242d] dark:bg-[#11151a] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(255,154,134,0.1)] ${delayClass}`}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff9a86]/20 bg-[#fff5f3] transition-transform group-hover:scale-110 dark:bg-[#ff9a86]/10">
        <Icon className="h-5 w-5 shrink-0 text-[#ff9a86]" />
      </div>
      <div className="mb-1 text-3xl font-extrabold md:text-4xl">{value}</div>
      <div className="text-sm font-medium text-slate-400 dark:text-[#546881]">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
