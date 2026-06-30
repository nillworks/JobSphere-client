"use client";

import { useEffect, useState, useRef } from "react";

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    if (!isIntersecting) return;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(easeOut * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isIntersecting]);

  return { count, ref };
};

const StatCard = ({ icon, value, label, delayClass = "" }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const isNumber = !isNaN(numericValue);

  const { count, ref } = useCountUp(isNumber ? numericValue : 0, 2500);

  return (
    <div
      ref={ref}
      className={`group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff9a86]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:border-[#1d242d] dark:bg-[#11151a] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(255,154,134,0.1)] ${delayClass}`}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff9a86]/20 bg-[#fff5f3] transition-transform group-hover:scale-110 dark:bg-[#ff9a86]/10">
        {icon}
      </div>
      <div className="mb-1 text-3xl font-extrabold md:text-4xl">
        {isNumber ? `${count}${suffix}` : value}
      </div>
      <div className="text-sm font-medium text-slate-400 dark:text-[#546881]">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
