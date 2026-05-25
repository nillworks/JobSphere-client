import { Briefcase, GitBranch, Link2, Share2 } from 'lucide-react';
import { SITE_NAME } from './brand';
import SectionShell from './SectionShell';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/50 dark:border-[#1d242d] dark:bg-[#0f1318]/50">
      <SectionShell className="py-12 md:py-16">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href={'/'} className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff9a86] to-[#bf7465] shadow-lg">
                <Briefcase className="h-5 w-5 shrink-0 text-white" />
              </div>
              <span className="text-lg font-bold">{SITE_NAME}</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400 dark:text-[#546881]">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-[#ff9a86] uppercase">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-[#ff9a86] dark:text-[#546881]"
                >
                  Job discovery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-[#ff9a86] dark:text-[#546881]"
                >
                  Worker AI
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-[#ff9a86] dark:text-[#546881]"
                >
                  Companies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-[#ff9a86] dark:text-[#546881]"
                >
                  Salary data
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-[#ff9a86] uppercase">
              Navigations
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-[#ff9a86] dark:text-[#546881]"
                >
                  Help center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-[#ff9a86] dark:text-[#546881]"
                >
                  Career library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-[#ff9a86] dark:text-[#546881]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-[#ff9a86] dark:text-[#546881]"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-[#ff9a86] uppercase">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-[#ff9a86] dark:text-[#546881]"
                >
                  Brand Guideline
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-[#ff9a86] dark:text-[#546881]"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-[#ff9a86] dark:text-[#546881]"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row dark:border-[#1d242d]">
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 transition-all hover:-translate-y-0.5 hover:border-[#ff9a86]/30 hover:text-[#ff9a86] dark:border-[#1d242d] dark:bg-[#11151a] dark:text-[#546881]"
              aria-label="GitHub"
            >
              <GitBranch className="h-4 w-4 shrink-0" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 transition-all hover:-translate-y-0.5 hover:border-[#ff9a86]/30 hover:text-[#ff9a86] dark:border-[#1d242d] dark:bg-[#11151a] dark:text-[#546881]"
              aria-label="Twitter"
            >
              <Share2 className="h-4 w-4 shrink-0" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 transition-all hover:-translate-y-0.5 hover:border-[#ff9a86]/30 hover:text-[#ff9a86] dark:border-[#1d242d] dark:bg-[#11151a] dark:text-[#546881]"
              aria-label="LinkedIn"
            >
              <Link2 className="h-4 w-4 shrink-0" />
            </a>
          </div>
          <p className="text-xs text-slate-400 dark:text-[#546881]">
            Copyright 2024 — {SITE_NAME} · Terms & Policy · Privacy Guideline
          </p>
        </div>
      </SectionShell>
    </footer>
  );
};

export default Footer;
