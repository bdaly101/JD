'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Industry from '@/components/pages/IndustryPage';
import SmallHeader from '@/components/SmallHeader';

const IndustryPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <SmallHeader />
      </div>


      {/* Ensures Home takes up all available space between Header and Footer */}
      <div className="flex-grow pt-10 md:pt-24 pb-0 mb-0">
        <Industry />
      </div>
      <div className="pt-0 mt-0">
        <Footer />
      </div>

    </div>

  );
};

export default IndustryPage;