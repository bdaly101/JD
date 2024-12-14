"use client";

import React, { useEffect, Suspense } from 'react';
import HomePage from "@/components/pages/HomePage"

// Amplify.configure(awsExports);

export default function Page() {

  return (
    
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
}
