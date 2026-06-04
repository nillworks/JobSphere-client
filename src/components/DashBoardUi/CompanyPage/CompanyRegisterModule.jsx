import React from 'react';
import { X, Upload, MapPin } from 'lucide-react';

const CompanyRegisterModule = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Collected Form Data:', data);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300">
      <div className="w-full max-w-2xl bg-white dark:bg-[#1a1a1a] rounded-xl shadow-2xl border border-slate-200 dark:border-[#333] overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-200 dark:border-[#333]">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Register New Company
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Enter your business details to start hiring on HireLoop.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-[#2a2a2a] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          <form
            id="register-company-form"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="space-y-2">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="e.g. Acme Corp"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm"
                  required
                />
              </div>

              {/* Industry / Category */}
              <div className="space-y-2">
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Industry / Category
                </label>
                <div className="relative">
                  <select
                    id="industry"
                    name="industry"
                    defaultValue=""
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>
                      Select industry...
                    </option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Website URL */}
              <div className="space-y-2">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Website URL
                </label>
                <div className="flex rounded-lg overflow-hidden border border-slate-200 dark:border-[#333] focus-within:ring-2 focus-within:ring-slate-900 dark:focus-within:ring-white transition-all">
                  <span className="inline-flex items-center px-3 bg-slate-100 dark:bg-[#2a2a2a] text-slate-500 dark:text-slate-400 text-sm border-r border-slate-200 dark:border-[#333]">
                    https://
                  </span>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    placeholder="www.company.com"
                    className="flex-1 w-full px-3 py-2.5 bg-slate-50 dark:bg-[#222] focus:outline-none dark:text-white text-sm"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                  </div>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="City, Country"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm"
                  />
                </div>
              </div>

              {/* Employee Count Range */}
              <div className="space-y-2">
                <label
                  htmlFor="employeeCount"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Employee Count Range
                </label>
                <div className="relative">
                  <select
                    id="employeeCount"
                    name="employeeCount"
                    defaultValue=""
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select range...
                    </option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Company Logo */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Company Logo
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg border border-dashed border-slate-300 dark:border-[#444] bg-slate-50 dark:bg-[#222] text-slate-500 hover:bg-slate-100 dark:hover:bg-[#2a2a2a] transition-colors cursor-pointer relative overflow-hidden flex-shrink-0 group">
                    <input
                      type="file"
                      name="logo"
                      id="logo"
                      accept="image/png, image/jpeg"
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    <Upload className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Upload image
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      PNG, JPG up to 5MB
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brief Description */}
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Brief Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Tell us about your company's mission and culture..."
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm resize-none"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 p-5 border-t border-slate-200 dark:border-[#333] bg-slate-50/50 dark:bg-[#1a1a1a]">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-[#222] border border-slate-300 dark:border-[#444] rounded-lg hover:bg-slate-50 dark:hover:bg-[#2a2a2a] transition-colors shadow-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="register-company-form"
            className="px-5 py-2.5 text-sm font-bold text-white dark:text-slate-900 bg-slate-900 dark:bg-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-sm active:scale-95"
          >
            Register Company
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegisterModule;
