const SectionBadge = ({ label }) => (
  <div className="mb-4 inline-flex items-center gap-2">
    <span className="h-1.5 w-1.5 rounded-full bg-[#ff9a86]" />
    <span className="text-xs font-bold tracking-widest text-[#ff9a86] uppercase">
      {label}
    </span>
    <span className="h-1.5 w-1.5 rounded-full bg-[#ff9a86]" />
  </div>
);

export default SectionBadge;
