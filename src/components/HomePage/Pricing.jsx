'use client';

import { useState } from 'react';
import PricingCard, { PricingFeature } from '@/components/Shared/PricingCard';
import SectionBadge from '@/components/Shared/SectionBadge';
import SectionShell from '@/components/Shared/SectionShell';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/Shared/MotionWrapper';

const pricingPlans = [
  {
    name: 'Starter',
    subtitle: 'Start building your insights hub:',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    iconType: 'bolt',
    iconClass:
      'bg-slate-100 text-slate-400 dark:bg-[#0f1318] dark:text-[#546881]',
    featured: false,
    features: [
      'Daily AI match brief (top 5)',
      'Verified salary bands',
      'Company insight dashboards',
      '1-click apply, unlimited',
    ],
  },
  {
    id: 'growth_plan',
    name: 'Growth',
    subtitle: 'Everything in Starter, plus:',
    monthlyPrice: '$17',
    yearlyPrice: '$153',
    iconType: 'trending',
    iconClass:
      'border border-[#ff9a86]/20 bg-[#fff5f3] text-[#ff9a86] dark:bg-[#ff9a86]/10',
    featured: true,
    features: [
      'Priority AI matching',
      'Advanced salary analytics',
      'Resume optimization',
      'LinkedIn integration',
    ],
  },
  {
    id: 'premium_plan',
    name: 'Premium',
    subtitle: 'For serious job seekers:',
    monthlyPrice: '$99',
    yearlyPrice: '$891',
    iconType: 'sparkle',
    iconClass: 'bg-[#bf7465]/10 text-[#bf7465]',
    featured: false,
    features: [
      'Everything in Growth',
      'Multi-profile portfolios',
      'Shared talent rooms',
      'Recruiter direct access',
    ],
  },
];

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
        <SlideUp>
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
        </SlideUp>

        <StaggerContainer className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map(plan => (
            <StaggerItem key={plan.name}>
              <PricingCard
                featured={plan.featured}
                name={plan.name}
                subtitle={plan.subtitle}
                price={isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                period={isMonthly ? '/month' : '/year'}
                iconType={plan.iconType}
                iconClass={plan.iconClass}
                id={plan.id}
              >
                {plan.features.map(feature => (
                  <PricingFeature key={feature} accent={plan.featured}>
                    {feature}
                  </PricingFeature>
                ))}
              </PricingCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionShell>
    </section>
  );
};

export default Pricing;
