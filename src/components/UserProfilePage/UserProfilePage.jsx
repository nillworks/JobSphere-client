'use client';

import React, { useState, useEffect } from 'react';
import {
  User,
  Camera,
  Edit2,
  X,
  Mail,
  MapPin,
  Briefcase,
  Calendar,
  Check,
  Clock,
} from 'lucide-react';
import { toast } from 'sonner';
import { authClient, useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const UserProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { data, isPending } = useSession();
  const user = data?.user;
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isPending && !user) {
      router.push('/signin');
    }
  }, [isPending, user, router]);

  const formatDate = (dateInput) => {
    if (!dateInput) return 'N/A';
    try {
      const date = new Date(dateInput);
      if (isNaN(date.getTime())) return 'N/A';
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (e) {
      return 'N/A';
    }
  };

  if (isPending || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#090b0e]">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800"></div>
            <div className="absolute inset-0 rounded-full border-4 border-[#ff9a86] border-t-transparent animate-spin"></div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium animate-pulse">
            Loading Profile...
          </p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const allData = Object.fromEntries(formData.entries());
    console.log(allData);

    const { data } = await authClient.updateUser({
      image: allData?.image,
      name: allData?.name,
    });

    if (data) {
      toast.success('Profile updated successfully', {
        className:
          'bg-gradient-to-r from-[#ff9a86]/10 to-transparent dark:from-[#11151a] dark:to-[#0b0e12] border border-[#ff9a86]/30 text-slate-900 dark:text-white',
      });
      router.refresh();
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 dark:bg-[#090b0e]">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden flex items-center justify-center">
        <div className="absolute top-[20%] right-[20%] h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-l from-[#ff9a86]/10 via-rose-400/5 to-transparent blur-[100px] sm:h-[500px] sm:w-[500px]" />
        <div className="absolute bottom-[20%] left-[20%] h-[250px] w-[250px] animate-pulse rounded-full bg-gradient-to-r from-slate-500/10 via-blue-400/5 to-transparent blur-[100px] sm:h-[400px] sm:w-[400px] delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Profile Header Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200/60 bg-white/60 backdrop-blur-2xl dark:border-[#1d242d]/60 dark:bg-[#11151a]/60 transition-all duration-500">
          {/* Cover Photo Area */}
          <div className="h-48 sm:h-64 w-full relative bg-gradient-to-r from-[#1a1f26] to-[#0f1319] overflow-hidden">
            {/* Abstract Cover Shapes */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[150%] rounded-full bg-gradient-to-br from-[#ff9a86] to-transparent blur-[80px] -rotate-45" />
              <div className="absolute -bottom-[50%] -right-[10%] w-[50%] h-[150%] rounded-full bg-gradient-to-tl from-slate-600 to-transparent blur-[80px] rotate-45" />
            </div>

            {/* Edit Cover Button (Visual only) */}
            <button className="absolute top-4 right-4 p-2 bg-black/30 backdrop-blur-md rounded-xl text-white hover:bg-black/50 transition-colors border border-white/10 group">
              <Camera className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="px-6 sm:px-10 pb-10 relative">
            {/* Avatar & Action Button Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-20 mb-8 gap-4">
              <div className="relative group/avatar inline-block">
                {/* Avatar Glow */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#ff9a86] to-[#bf7465] blur-md opacity-40 group-hover/avatar:opacity-70 transition-opacity duration-500 animate-pulse"></div>
                {/* Avatar Image */}
                <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full border-4 border-white dark:border-[#11151a] bg-[#090b0e] overflow-hidden shadow-2xl">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                      <User className="w-12 h-12 text-slate-400" />
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={handleOpenModal}
                className="group/btn relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-br from-[#ff9a86] to-[#bf7465] text-[#090b0e] font-bold shadow-lg hover:shadow-[0_15px_30px_rgba(255,154,134,0.3)] hover:-translate-y-1 active:scale-95 transition-all duration-300 rounded-xl px-6 py-3 sm:mb-4 cursor-pointer"
              >
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[1000ms] ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                <Edit2 className="w-4 h-4 relative z-10 group-hover/btn:rotate-12 transition-transform" />
                <span className="relative z-10">Update Profile</span>
              </button>
            </div>

            {/* User Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                  {user.name}
                  <div className="bg-gradient-to-r from-[#ff9a86] to-[#bf7465] p-1 rounded-full">
                    <Check className="w-3 h-3 text-[#090b0e]" strokeWidth={4} />
                  </div>
                </h1>
                <p className="text-lg text-slate-600 dark:text-[#a3adbb] mt-1 font-medium">
                  {user.role || 'Member'}
                </p>
              </div>

              <p className="text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed text-lg">
                {user.bio || 'No bio added yet.'}
              </p>

              {/* Meta details */}
              <div className="flex flex-wrap gap-y-4 gap-x-8 pt-4 border-t border-slate-200 dark:border-[#1d242d]/80">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Mail className="w-5 h-5 text-[#ff9a86]" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-5 h-5 text-[#ff9a86]" />
                  <span>{user.location || 'Not specified'}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Calendar className="w-5 h-5 text-[#ff9a86]" />
                  <span>Joined {formatDate(user.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Clock className="w-5 h-5 text-[#ff9a86]" />
                  <span>Updated {formatDate(user.updatedAt)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra Sections (Stats/Activity placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { label: 'Profile Views', value: '1,245', trend: '+12%' },
            { label: 'Applications', value: '28', trend: '+4' },
            { label: 'Saved Jobs', value: '146', trend: '-2' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-xl border border-slate-200/60 dark:bg-[#11151a]/60 dark:border-[#1d242d]/60 rounded-3xl p-6 hover:border-[#ff9a86]/30 hover:shadow-[0_15px_30px_rgba(255,154,134,0.05)] transition-all duration-300 group cursor-default"
            >
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">
                {stat.label}
              </p>
              <div className="flex items-baseline gap-3">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </h3>
                <span
                  className={`text-sm font-semibold ${stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}
                >
                  {stat.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Update Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-white dark:bg-[#11151a] rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-[#1d242d] overflow-hidden flex flex-col transform transition-all duration-300 scale-100 opacity-100 zoom-in-95">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-200 dark:border-[#1d242d] flex items-center justify-between bg-slate-50/50 dark:bg-[#090b0e]/50">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Edit2 className="w-5 h-5 text-[#ff9a86]" />
                Update Profile
              </h3>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 dark:hover:text-slate-200 dark:hover:bg-[#1d242d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff9a86]/50 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Image Input Area */}
              <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6">
                <div className="relative group/modal-avatar">
                  <div className="h-24 w-24 rounded-full border-2 border-[#1d242d] bg-[#090b0e] overflow-hidden relative">
                    {user?.image ? (
                      <img
                        src={
                          user?.image ||
                          'https://static.vecteezy.com/system/resources/previews/015/934/677/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg'
                        }
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-800">
                        <User className="w-8 h-8 text-slate-400" />
                      </div>
                    )}
                    {/* Overlay for "upload" feel */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/modal-avatar:opacity-100 transition-opacity pointer-events-none">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Profile Image URL
                  </label>
                  <input
                    type="url"
                    name="image"
                    defaultValue={user?.image}
                    placeholder="https://example.com/avatar.jpg"
                    className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-[#ff9a86] focus:ring-2 focus:ring-[#ff9a86]/20 dark:bg-[#090b0e]/50 dark:border-[#1d242d] dark:text-slate-50 dark:focus:border-[#ff9a86] transition-all duration-300 shadow-sm"
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Provide a direct link to an image.
                  </p>
                </div>
              </div>

              {/* Name Input Area */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    defaultValue={user?.name}
                    placeholder="Enter your full name"
                    className="block w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-[#ff9a86] focus:ring-2 focus:ring-[#ff9a86]/20 dark:bg-[#090b0e]/50 dark:border-[#1d242d] dark:text-slate-50 dark:focus:border-[#ff9a86] transition-all duration-300 shadow-sm"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-[#1d242d]">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1d242d] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold text-[#090b0e] bg-gradient-to-r from-[#ff9a86] to-[#bf7465] hover:shadow-[0_8px_20px_rgba(255,154,134,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;
