import subscriptionsPost from '@/lib/Action/subscriptionsPost';
import { stripe } from '@/lib/stripe';
import { email } from 'better-auth';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error('Please provide a valid session_id');
  }

  const {
    status,
    customer_details: { email: customerEmail },
    metadata,
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent'],
  });

  if (status === 'open') {
    redirect('/');
  }

  if (status === 'complete') {
    const subsInfo = {
      email: customerEmail,
      planId: metadata?.planId,
    };

    await subscriptionsPost(subsInfo);

    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4 dark:from-[#0b0f14] dark:to-[#11151a]">
        <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl dark:border-[#1d242d] dark:bg-[#11151a]">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-4 dark:bg-green-500/10">
              <CheckCircle className="h-14 w-14 text-green-600 dark:text-green-400" />
            </div>
          </div>

          <h1 className="mb-3 text-3xl font-extrabold">Payment Successful</h1>

          <p className="mb-2 text-slate-600 dark:text-slate-400">
            Thank you for your purchase.
          </p>

          <p className="mb-8 text-sm text-slate-500 dark:text-slate-500">
            A confirmation email has been sent to
            <span className="mx-1 font-semibold text-slate-900 dark:text-white">
              {customerEmail}
            </span>
          </p>

          <div className="rounded-2xl bg-slate-50 p-4 text-left dark:bg-[#0f1318]">
            <h3 className="mb-2 font-semibold">Whats Next?</h3>

            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>✓ Your subscription is now active</li>
              <li>✓ Premium features are unlocked</li>
              <li>✓ You can start using your plan immediately</li>
            </ul>
          </div>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff9a86] to-[#e68b79] px-6 py-3 font-semibold text-slate-950 transition-all hover:gap-3"
          >
            Go To Home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    );
  }

  return null;
}
