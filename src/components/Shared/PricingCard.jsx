import { ArrowRight, Check, Sparkles, TrendingUp, Zap } from "lucide-react";

const PlanIcon = ({ type }) => {
  const className = "h-5 w-5 shrink-0";
  if (type === "trending") return <TrendingUp className={className} />;
  if (type === "sparkle") return <Sparkles className={className} />;
  return <Zap className={className} />;
};

const PricingFeature = ({ children, accent = false }) => (
  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-[#a3adbb]">
    <Check
      className={`mt-0.5 h-5 w-5 shrink-0 ${accent ? "text-[#ff9a86]" : "text-slate-400 dark:text-[#546881]"}`}
      strokeWidth={2.5}
    />
    <span className="leading-snug">{children}</span>
  </li>
);

const PricingCard = ({
  featured = false,
  name,
  subtitle,
  price,
  period,
  iconType,
  iconClass,
  children,
}) => {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-6 md:p-8 ${
        featured
          ? "border border-[#ff9a86]/30 bg-gradient-to-b from-white to-[#ff9a86]/5 shadow-xl shadow-[#ff9a86]/10 dark:from-[#11151a] dark:to-[#ff9a86]/5"
          : "border border-slate-200 bg-white dark:border-[#1d242d] dark:bg-[#11151a]"
      } transition-all hover:-translate-y-1`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#ff9a86] to-[#bf7465] px-4 py-1 text-xs font-bold whitespace-nowrap text-slate-950 shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
          >
            <PlanIcon type={iconType} />
          </div>
          <span className="text-lg font-bold">{name}</span>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-2xl leading-none font-extrabold md:text-3xl">{price}</div>
          <div className="mt-1 text-xs text-slate-500 dark:text-[#546881]">{period}</div>
        </div>
      </div>

      <p className="mb-6 text-sm font-semibold text-slate-500 dark:text-[#546881]">
        {subtitle}
      </p>

      <ul className="mb-8 flex flex-1 flex-col gap-4">{children}</ul>

      <button
        type="button"
        className={
          featured
            ? "flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff9a86] to-[#e68b79] py-3 text-sm font-bold text-slate-950 shadow-lg transition-all hover:gap-3 hover:shadow-[#ff9a86]/30"
            : "flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-800 transition-all hover:border-[#ff9a86]/50 hover:text-[#ff9a86] dark:border-[#1d242d] dark:text-slate-100"
        }
      >
        Choose This Plan
        <ArrowRight className="h-4 w-4 shrink-0" />
      </button>
    </div>
  );
};

export { PricingFeature };
export default PricingCard;
