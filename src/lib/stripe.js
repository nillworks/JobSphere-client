import 'server-only';

import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
  growth_plan: 'price_1TgbvkPN4Is4hVYoeQ4pi5ka',
  premium_plan: 'price_1Th5ebPN4Is4hVYorcvNgfhK',
};
