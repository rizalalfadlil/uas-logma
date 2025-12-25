import React from "react";

export const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-2">
            Logic Challenge – Aplikasi Zakat
          </h1>
          <p className="text-slate-600 text-lg">UAS Matematika Logika</p>
        </div>
      </div>
    </header>
  );
};
