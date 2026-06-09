import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ApplyButton = ({ _id }) => (
  <Link
    href={`jobs/${_id}`}
    type="button"
    className="group/btn cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-slate-500 transition-all hover:text-[#ff9a86] dark:text-[#a3adbb]"
  >
    <span>Apply Now</span>
    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover/btn:translate-x-1" />
  </Link>
);

export default ApplyButton;
