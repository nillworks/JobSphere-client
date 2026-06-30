const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="group flex gap-4 rounded-xl border border-transparent p-4 transition-all hover:border-slate-200 hover:bg-white dark:hover:border-[#1d242d] dark:hover:bg-[#11151a]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#ff9a86]/20 bg-[#fff5f3] transition-transform group-hover:scale-110 dark:bg-[#ff9a86]/10">
        {icon}
      </div>
      <div>
        <h4 className="mb-1 font-bold">{title}</h4>
        <p className="text-sm leading-relaxed text-slate-400 dark:text-[#546881]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
