'use client';

import React, { useState } from 'react';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
  Image as ImageIcon,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';
import { authClient, signOut } from '@/lib/auth-client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    const formData = new FormData(e.target);
    const AllData = Object.fromEntries(formData.entries());

    if (AllData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (AllData.password !== AllData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    console.log(AllData);
    setLoading(true);

    // Enable authentiCation Email & Password SignUp
    const { data, error } = await authClient.signUp.email({
      name: AllData?.name,
      email: AllData?.email,
      password: AllData?.password,
      image: AllData?.image,
      callbackURL: '/',
    });

    if (data) {
      signOut();
      toast.success('Account created successfully', {
        description: 'Welcome to JobSphere! Your account is ready to use.',
        className:
          'bg-gradient-to-r from-[#ff9a86]/10 to-transparent dark:from-[#11151a] dark:to-[#0b0e12] border border-[#ff9a86]/30 text-slate-900 dark:text-white',
      });
      router.push('/signin');
    }

    if (error) {
      toast.error('Signup failed', {
        description: error.message,
        className:
          'bg-white dark:bg-[#11151a] border border-red-400/40 text-red-600 dark:text-red-400',
        style: {
          boxShadow: '0 10px 30px rgba(255,0,0,0.12)',
        },
      });
    }
    setLoading(false);
  };

  const handleGoogleSign = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    });
  };

  return (
    <div className="flex  items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden flex items-center justify-center">
        <div className="absolute top-[30%] left-[30%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-r from-[#ff9a86]/20 via-rose-400/10 to-transparent blur-[80px] sm:h-[450px] sm:w-[450px]" />
        <div className="absolute top-[70%] left-[70%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-l from-slate-500/20 via-blue-400/10 to-transparent blur-[80px] sm:h-[400px] sm:w-[400px] delay-1000" />
      </div>

      <div className="w-full max-w-6xl flex my-20 rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200/60 bg-white/60 backdrop-blur-2xl dark:border-[#1d242d]/60 dark:bg-[#11151a]/60 hover:shadow-[0_30px_70px_-15px_rgba(255,154,134,0.15)] hover:border-[#ff9a86]/30 transition-all duration-500">
        {/* Left Side - Visual Design */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#090b0e] p-12 flex-col justify-between overflow-hidden">
          {/* Animated Abstract Shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-[#ff9a86]/20 to-transparent blur-[80px]" />
            <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tl from-rose-400/20 to-transparent blur-[80px]" />
            <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-bl from-slate-500/30 to-transparent blur-[60px]" />
          </div>

          <div className="relative z-10">
            <Link href="/" className="inline-block mb-12 group/logo">
              <span className="text-3xl font-black tracking-tighter text-white group-hover/logo:scale-105 transition-transform inline-block">
                Job<span className="text-[#ff9a86]">Sphere</span>
              </span>
            </Link>
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Start your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a86] to-[#bf7465]">
                success story
              </span>{' '}
              today
            </h3>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              Create an account to unlock endless career opportunities, build
              your professional network, and take the next big step.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative z-10 max-w-md">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:bg-white/10">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ff9a86] to-[#bf7465]" />
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  {/* Glowing ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#ff9a86] to-[#bf7465] blur opacity-50 animate-pulse"></div>
                  {/* Avatar Circle */}
                  <div className="relative w-14 h-14 rounded-full bg-[#11151a] border-2 border-[#ff9a86]/30 flex items-center justify-center overflow-hidden shadow-xl">
                    <span className="text-[#ff9a86] font-bold text-2xl font-serif">
                      M
                    </span>
                    {/* Inner gradient shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#ff9a86]/10 to-transparent"></div>
                  </div>
                  {/* Quote badge floating */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#ff9a86] to-[#bf7465] flex items-center justify-center border-2 border-[#090b0e] shadow-lg">
                    <svg
                      className="w-3 h-3 text-[#090b0e]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg tracking-wide">
                    Shipon Roy
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-xs font-medium text-[#ff9a86] uppercase tracking-wider">
                      MERN STACK Developer
                    </p>
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(star => (
                        <svg
                          key={star}
                          className="w-3 h-3 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Signing up was the best decision for my career. The platform is
                sleek, and the job recommendations are incredibly accurate!
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="w-full max-w-md mx-auto space-y-6">
            <div className="text-center lg:text-left group">
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent dark:from-slate-50 dark:to-[#a3adbb] group-hover:scale-105 lg:group-hover:translate-x-2 lg:group-hover:scale-100 origin-left transition-transform duration-500">
                Create an Account
              </h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-[#a3adbb] group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-500">
                Join JobSphere and find your dream job
              </p>
            </div>

            {error && (
              <div className="p-3.5 mt-4 text-sm text-red-600 dark:text-red-400 bg-red-100/80 dark:bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-2.5 transition-all">
                <AlertCircle className="w-5 h-5 shrink-0 animate-pulse" />
                <p className="font-medium">{error}</p>
              </div>
            )}

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-5">
                {/* Full Name Field */}
                <div className="group/field transition-all duration-300 focus-within:-translate-y-1">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors group-focus-within/field:text-[#ff9a86]">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <User className="h-5 w-5 text-slate-400 group-focus-within/field:text-[#ff9a86] group-focus-within/field:scale-110 transition-all duration-300" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      required
                      className="block w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-[#ff9a86] focus:ring-2 focus:ring-[#ff9a86]/20 dark:bg-[#090b0e]/50 dark:border-[#1d242d] dark:text-slate-50 dark:focus:border-[#ff9a86] transition-all duration-300 bg-slate-50/50 shadow-sm focus:shadow-md"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group/field transition-all duration-300 focus-within:-translate-y-1">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors group-focus-within/field:text-[#ff9a86]">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400 group-focus-within/field:text-[#ff9a86] group-focus-within/field:scale-110 transition-all duration-300" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      className="block w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-[#ff9a86] focus:ring-2 focus:ring-[#ff9a86]/20 dark:bg-[#090b0e]/50 dark:border-[#1d242d] dark:text-slate-50 dark:focus:border-[#ff9a86] transition-all duration-300 bg-slate-50/50 shadow-sm focus:shadow-md"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Image URL Field */}
                <div className="group/field transition-all duration-300 focus-within:-translate-y-1">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors group-focus-within/field:text-[#ff9a86]">
                    Image URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <ImageIcon className="h-5 w-5 text-slate-400 group-focus-within/field:text-[#ff9a86] group-focus-within/field:scale-110 transition-all duration-300" />
                    </div>
                    <input
                      type="url"
                      name="image"
                      required
                      className="block w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-[#ff9a86] focus:ring-2 focus:ring-[#ff9a86]/20 dark:bg-[#090b0e]/50 dark:border-[#1d242d] dark:text-slate-50 dark:focus:border-[#ff9a86] transition-all duration-300 bg-slate-50/50 shadow-sm focus:shadow-md"
                      placeholder="Profile Image URL"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="group/field transition-all duration-300 focus-within:-translate-y-1">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors group-focus-within/field:text-[#ff9a86]">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <Lock className="h-5 w-5 text-slate-400 group-focus-within/field:text-[#ff9a86] group-focus-within/field:scale-110 transition-all duration-300" />
                    </div>
                    <input
                      type={isVisible ? 'text' : 'password'}
                      name="password"
                      required
                      minLength={6}
                      className="block w-full pl-11 pr-11 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-[#ff9a86] focus:ring-2 focus:ring-[#ff9a86]/20 dark:bg-[#090b0e]/50 dark:border-[#1d242d] dark:text-slate-50 dark:focus:border-[#ff9a86] transition-all duration-300 bg-slate-50/50 shadow-sm focus:shadow-md"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={toggleVisibility}
                      className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:scale-110 focus:outline-none transition-all duration-300"
                    >
                      {isVisible ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="group/field transition-all duration-300 focus-within:-translate-y-1">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 transition-colors group-focus-within/field:text-[#ff9a86]">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <Lock className="h-5 w-5 text-slate-400 group-focus-within/field:text-[#ff9a86] group-focus-within/field:scale-110 transition-all duration-300" />
                    </div>
                    <input
                      type={isConfirmVisible ? 'text' : 'password'}
                      name="confirmPassword"
                      required
                      className="block w-full pl-11 pr-11 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-[#ff9a86] focus:ring-2 focus:ring-[#ff9a86]/20 dark:bg-[#090b0e]/50 dark:border-[#1d242d] dark:text-slate-50 dark:focus:border-[#ff9a86] transition-all duration-300 bg-slate-50/50 shadow-sm focus:shadow-md"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmVisibility}
                      className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:scale-110 focus:outline-none transition-all duration-300"
                    >
                      {isConfirmVisible ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-5 group/checkbox cursor-pointer">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-slate-300 text-[#ff9a86] focus:ring-[#ff9a86] dark:border-[#1d242d] dark:bg-[#11151a] dark:checked:bg-[#ff9a86] transition-all duration-300 cursor-pointer"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-slate-500 dark:text-[#a3adbb] group-hover/checkbox:text-slate-700 dark:group-hover/checkbox:text-slate-300 transition-colors cursor-pointer"
                >
                  I agree to the{' '}
                  <Link
                    href="/terms"
                    className="text-[#ff9a86] hover:underline underline-offset-4 transition-all"
                  >
                    Terms
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/privacy"
                    className="text-[#ff9a86] hover:underline underline-offset-4 transition-all"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Account Crate Button */}
              <button
                type="submit"
                disabled={loading}
                className="group/btn w-full cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-br from-[#ff9a86] to-[#bf7465] text-[#090b0e] font-bold rounded-xl py-3.5 mt-8 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full"></span>
                    Creating...
                  </>
                ) : (
                  <>
                    Sign Up
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Continue with Google Login */}
              <button
                type="button"
                onClick={() => handleGoogleSign()}
                className="w-full flex items-center cursor-pointer justify-center gap-3 border border-slate-200 dark:border-[#1d242d] bg-white dark:bg-[#090b0e]/60 text-slate-700 dark:text-slate-200 rounded-xl py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 group/google"
              >
                <FcGoogle className="text-xl group-hover/google:scale-110 transition-transform" />

                <span>Continue with Google</span>
              </button>
            </form>

            <div className="mt-8 text-center lg:text-left text-sm text-slate-500 dark:text-[#a3adbb]">
              Already have an account?
              <Link
                href="/signin"
                className="font-semibold text-[#ff9a86] hover:text-[#bf7465] hover:underline underline-offset-4 transition-all duration-300 inline-block hover:-translate-y-0.5"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
