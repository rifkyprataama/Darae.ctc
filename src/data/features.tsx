import React from 'react';

export const techStackData = [
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000/ffffff", invert: true },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", invert: false },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", invert: false },
    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", invert: false },
    { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B", invert: false },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20", invert: false },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", invert: false },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", invert: false },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E", invert: false },
    { name: "Canva", icon: "/icons/canva.svg", invert: false },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", invert: false },
];

export const featuresData = [
  {
    title: "Pengerjaan Cepat",
    desc: "Deadline adalah janji. Kami menggunakan agile workflow untuk memastikan proyek selesai tepat waktu.",
    color: "bg-darae-accent/5 text-darae-accent dark:bg-darae-gold/10 dark:text-darae-gold",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Responsive Design",
    desc: "Tampilan website otomatis menyesuaikan layar laptop, tablet, hingga smartphone dengan sempurna.",
    color: "bg-darae-accent/5 text-darae-accent dark:bg-darae-gold/10 dark:text-darae-gold",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "High Performance",
    desc: "Optimasi kode tingkat lanjut untuk memastikan loading website super cepat (Google PageSpeed friendly).",
    color: "bg-darae-accent/5 text-darae-accent dark:bg-darae-gold/10 dark:text-darae-gold",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Desain Premium",
    desc: "Visual yang bersih, modern, dan eksklusif. Meningkatkan kepercayaan pelanggan terhadap brand Anda.",
    color: "bg-darae-accent/5 text-darae-accent dark:bg-darae-gold/10 dark:text-darae-gold",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: "Best Value",
    desc: "Kualitas agency besar dengan investasi yang masuk akal, transparan, dan tanpa biaya tersembunyi.",
    color: "bg-darae-accent/5 text-darae-accent dark:bg-darae-gold/10 dark:text-darae-gold",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    )
  }
];