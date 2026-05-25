'use client';

import { useState } from 'react';
import PricingCard, { PricingFeature } from '@/components/Shared/PricingCard';
import SectionBadge from '@/components/Shared/SectionBadge';
import SectionShell from '@/components/Shared/SectionShell';

const Pricing = () => {
  const [billing, setBilling] = useState('monthly');
  const isMonthly = billing === 'monthly';

  const activeBtn =
    'rounded-full bg-gradient-to-r from-[#ff9a86] to-[#e68b79] px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm';
  const inactiveBtn =
    'rounded-full px-4 py-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900 dark:text-[#546881] dark:hover:text-slate-50';

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-24">
      <SectionShell>
        <div className="mb-12 text-center">
          <SectionBadge label="Pricing" />
          <h2 className="mb-8 text-3xl font-extrabold md:text-4xl">
            Pay for the leverage, not the listings
          </h2>

          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1 dark:border-[#1d242d] dark:bg-[#11151a]">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={isMonthly ? activeBtn : inactiveBtn}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling('yearly')}
              className={`flex items-center gap-2 ${!isMonthly ? activeBtn : inactiveBtn}`}
            >
              Yearly
              <span className="rounded-full bg-[#ff9a86]/20 px-2 py-0.5 text-xs text-[#ff9a86]">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <PricingCard
            name="Starter"
            subtitle="Start building your insights hub:"
            price={isMonthly ? '$0' : '$0'}
            period={isMonthly ? '/month' : '/year'}
            iconType="bolt"
            iconClass="bg-slate-100 text-slate-400 dark:bg-[#0f1318] dark:text-[#546881]"
          >
            <PricingFeature>Daily AI match brief (top 5)</PricingFeature>
            <PricingFeature>Verified salary bands</PricingFeature>
            <PricingFeature>Company insight dashboards</PricingFeature>
            <PricingFeature>1-click apply, unlimited</PricingFeature>
          </PricingCard>

          <PricingCard
            featured
            name="Growth"
            subtitle="Everything in Starter, plus:"
            price={isMonthly ? '$17' : '$153'}
            period={isMonthly ? '/month' : '/year'}
            iconType="trending"
            iconClass="border border-[#ff9a86]/20 bg-[#fff5f3] text-[#ff9a86] dark:bg-[#ff9a86]/10"
          >
            <PricingFeature accent>Priority AI matching</PricingFeature>
            <PricingFeature accent>Advanced salary analytics</PricingFeature>
            <PricingFeature accent>Resume optimization</PricingFeature>
            <PricingFeature accent>LinkedIn integration</PricingFeature>
          </PricingCard>

          <PricingCard
            name="Premium"
            subtitle="For serious job seekers:"
            price={isMonthly ? '$99' : '$891'}
            period={isMonthly ? '/month' : '/year'}
            iconType="sparkle"
            iconClass="bg-[#bf7465]/10 text-[#bf7465]"
          >
            <PricingFeature>Everything in Growth</PricingFeature>
            <PricingFeature>Multi-profile portfolios</PricingFeature>
            <PricingFeature>Shared talent rooms</PricingFeature>
            <PricingFeature>Recruiter direct access</PricingFeature>
          </PricingCard>
        </div>
      </SectionShell>
    </section>
  );
};

export default Pricing;
