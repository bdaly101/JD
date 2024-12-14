'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReligionPage from '@/components/IndustryReligious';

const IndustryPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />

      {/* Ensures Home takes up all available space between Header and Footer */}
      <div className="flex-grow pb-0 mb-0">
        <ReligionPage />
      </div>
      <div className="pt-0 mt-0">
        <Footer />
      </div>

    </div>

  );
};

export default IndustryPage;